import os
import sys

args = sys.argv[1:]

show_all = "-a" in args
one_per_line = "-1" in args

paths = [arg for arg in args if arg not in ["-a", "-1"]]

if not paths:
    paths = ["."]

for path in paths:
    items = os.listdir(path)

    if show_all:
        items.sort()
        items = [".", ".."] + items
    else:
        items = [item for item in items if not item.startswith(".")]
        items.sort()

    if one_per_line:
        for item in items:
            print(item)
    else:
        print(" ".join(items))