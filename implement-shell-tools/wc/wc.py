import sys

args = sys.argv[1:]

show_lines = "-l" in args
show_words = "-w" in args
show_chars = "-c" in args

files = [arg for arg in args if arg not in ["-l", "-w", "-c"]]

total_lines = 0
total_words = 0
total_chars = 0

for file in files:
    with open(file, "r") as f:
        content = f.read()

    lines = len(content.splitlines())
    words = len(content.split())
    chars = len(content)

    total_lines += lines
    total_words += words
    total_chars += chars

    if show_lines:
        print(lines, file)
    elif show_words:
        print(words, file)
    elif show_chars:
        print(chars, file)
    else:
        print(lines, words, chars, file)

if len(files) > 1:
    if show_lines:
        print(total_lines, "total")
    elif show_words:
        print(total_words, "total")
    elif show_chars:
        print(total_chars, "total")
    else:
        print(total_lines, total_words, total_chars, "total")