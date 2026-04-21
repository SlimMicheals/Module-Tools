import sys

args = sys.argv[1:]

show_line_numbers = "-n" in args
number_non_empty = "-b" in args

files = [arg for arg in args if arg not in ["-n", "-b"]]

for file in files:
    with open(file, "r") as f:
        lines = f.readlines()

        if number_non_empty:
            count = 1
            for line in lines:
                if line.strip() != "":
                    print(f"{count:6}  {line}", end="")
                    count += 1
                else:
                    print(line, end="")

        elif show_line_numbers:
            for i, line in enumerate(lines, start=1):
                print(f"{i:6}  {line}", end="")

        else:
            print("".join(lines), end="")