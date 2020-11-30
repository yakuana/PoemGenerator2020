import requests 
from classes import Poem, Word, Sequence
 
# Create global constant for all poets' poem urls retrieved from poetrydb.org API 
POET_URLS = {
    "hammon_url": "https://poetrydb.org/author/Jupiter%20Hammon",
}

def get_poems(urls): 
    '''Use POET_URLS object as urls. Loop through the object and 
    retrieve the poems. Returns an list of poems.'''

    poems = [] 

    for key in urls: 
        # Send GET requests for each artist
        response = requests.request('GET', urls[key])

        # Check if 200 response recieved 
        if response.ok:
            # Add JSON response data list to the POEMS list 
            poems.extend(response.json())

    return poems 

def get_words_and_sequences(poems):
    '''Retrieves every word from each poem in the poems list
    and returns them in a dictionary called all_word_sequences
    (all words and sequences). Also creates, Poem objects
    for each poem in the poems list.'''

    all_word_sequences = {}
    final_poems_list = [] 

    for poem in poems:
        poem_title = poem["title"]
        poem_lines = poem["lines"]
        poem_line_count = poem["linecount"]
        poem_words_object = dict()

        for line in poem["lines"]:
            line_list = line.split()
            num_words = len(line_list)

            if (num_words == 1):
                # line only has 1 one word
                word = line_list[0]  
                sequence = word + "\n"
                
                all_word_sequences[word] = sequence
                poem_words_object[word] = sequence
                continue
            elif (num_words == 0):
                # line is an empty string 
                word = "newline"
                word_part_of_speach = None 
                sequence = "\n"
    
                all_word_sequences[word] = sequence
                poem_words_object[word] = sequence
                continue 
            
            word = line_list[0] 

            # Check if word exists in both dictionaries 
            if (all_word_sequences.get(word) == None):
                all_word_sequences[word] = [] 
                poem_words_object[word] = []
            elif (poem_words_object.get(word) == None):
                poem_words_object[word] = [] 

            # Create sequences of len=2 by concatenating word string
            # with every word in the line 
            while len(line_list) > 2:
                sequence = word + " " + line_list[1]

                all_word_sequences[word] = all_word_sequences[word] + [sequence]
                poem_words_object[word] = poem_words_object[word]  + [sequence]
                
                del line_list[0]
        
        # Get Word objects for current poem using poem_words_object 
        poem_words_list = get_word_objects(poem_words_object)

        # Create a new poem 
        new_poem = Poem(poem_title, poem_lines, poem_line_count, poem_words_list)

        # Add the poem to the final_poems_list 
        final_poems_list.append(new_poem)
    
    return all_word_sequences, final_poems_list


def get_word_objects(word_sequences):
    
    words = [] 

    for key in word_sequences: 
        word = key 
        part_of_speach = get_part_of_speach(word)
        sequence_list = [] 
        sequences = word_sequences[word]

        for sequence in sequences:
            count = word_sequences[word].count(word)
            new_sequence = Sequence(sequence, count)
            sequence_list.append(new_sequence)
            
            if (count > 1):
                # Remove all occurances from sequences 
                while sequence.count(word) != 0:
                    sequences.remove(word)
        
        new_word = Word(word, part_of_speach, sequence_list)
        words.append(new_word)
    
    return words 


def get_part_of_speach(word):
    
    lowercase_word = word.lower().replace(",.!", "")
    api_key = "aeb2df49-a687-4538-8d72-581581a973ad"
    url = "https://www.dictionaryapi.com/api/v3/references/collegiate/json/" + lowercase_word + "?key=" + api_key

    response = requests.request('GET', url)

    # Check if 200 response recieved 
    if response.ok:
        if (type(response.json()[0]) == dict):
            part_of_speach = response.json()[0]["fl"]
        elif (type(response.json()[0]) == str):
            # newline 
            part_of_speach = None

    return part_of_speach 


a = get_poems(POET_URLS)
b, c = get_words_and_sequences(a)

print("This is c\n", c)