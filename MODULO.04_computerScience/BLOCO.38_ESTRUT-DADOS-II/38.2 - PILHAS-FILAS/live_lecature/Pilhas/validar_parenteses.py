from inspect import stack
from stack import Stack


def is_valid(string):
    stack = Stack()

    if len(string) % 2 != 0:
        return False

    for char in string:
        if char not in['(', '[', '{', ')', ']', '}']:
            return False
    
        if char in ['(', '[', '{']:
            stack.push(char)

        elif char == ')' and not stack.is_empty() and stack.peek() == "(":
            stack.pop()
        elif char == ']' and not stack.is_empty() and stack.peek() == "[":
            stack.pop()
        elif char == '}' and not stack.is_empty() and stack.peek() == "{":
            stack.pop()
            
    return stack.is_empty()
    

print(is_valid('()'))  # True
print(is_valid('{)'))  # False    - chaves com parenteses
print(is_valid('()[]{}'))  # True
print(is_valid('(]'))  # False
print(is_valid('([)]'))  # False        - colchetes com parenteses
print(is_valid('{[]}'))  # True
print(is_valid('{{}[][[[]]]}'))  # True
print(is_valid('{{({})}}'))  # True
print(is_valid('[[[]]]'))  # True
print(is_valid('())'))  # False