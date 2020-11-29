import requests 

# Create global constant for all poets' poem urls retrieved from poetrydb.org API 
POETS = {
    # "dunbar_url": "https://poetrydb.org/author/Paul%20Laurence%20Dunbar",
    "hammon_url": "https://poetrydb.org/author/Jupiter%20Hammon",
    # "wheatley_url": "https://poetrydb.org/author/Phillis%20Wheatley",
}

def get_poems(urls): 
    # Stores all POEMS within the training set 
    poems = [] 

    for key in urls: 
        # Send GET requests for each artist
        response = requests.request('GET', urls[key])

        # Check if 200 response recieved 
        if response.ok:
            # Add JSON response data array to the POEMS array 
            poems.extend(response.json())

    return poems 

POEMS = get_poems(POETS)

def get_word_sequence(poems_array):
    word_segments = {}

    for poem in poems_array:
        for line in poem["lines"]:
            line_array = line.split()
            num_words = len(line_array)

            if num_words == 1:
                sequence = line_array[0] + "  "
                word_segments[current_word] = sequence
                continue
            elif (num_words == 0):
                word_segments["emptyspace"] = " "
                continue 

            current_word = line_array[0]

            if (word_segments.get(current_word) == None):
                    word_segments[current_word] = [] 

            print(word_segments[current_word], line_array[0:2])   

            while len(line_array) > 2:
                sequence = current_word + " " + line_array[1]
                word_segments[current_word] = word_segments[current_word] + [sequence]
                
                del line_array[0]

    
    return word_segments

get_word_sequence(POEMS)  


