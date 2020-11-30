class Poem(object): 
    def __init__(self, title, lines, line_count, words=[], fitness=0, probability=0):
        self.title = title
        self.lines = lines 
        self.line_count = line_count
        self.words = words 
        self.fitness = fitness
        self.probability = probability

    def __str__(self):
        return f"Title: {self.title}\n Fitness: {self.fitness}\n"
    
    def current_probability(self, total): 
        self.probability = self.fitness / total


class Word(object):
    def __init__(self, word, part_of_speach, sequence_list, frequency=0):
        self.word = word
        self.part_of_speach = part_of_speach
        self.sequence_list = sequence_list
        self.frequency = len(sequence_list)

    def __str__(self):
        return f"Word: {self.word}\n Type: {self.part_of_speach}\n"


class Sequence(object): 
    def __init__(self, seq_string, count=1): 
        self.seq_string = seq_string
        self.count = count 



    
