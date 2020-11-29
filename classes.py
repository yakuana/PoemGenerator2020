class Poem(object): 
    def __init__(self, title, lines, line_count):
        self.title = title
        self.lines = lines 
        self.line_count = line_count
        self.fitness = 0
        self.probability = 0
        self.total = 0 

    def __str__(self):
        return f"Title: {self.title}\n Fitness: {self.fitness}\n"
    
    def current_probability(self, total): 
        self.probability = self.fitness / total


class Line(object):
    def __init__(self, words, structure):
        self.words = words 
        self.structure = {}
