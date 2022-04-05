def extra_end(str):
    last = str[len(str) - 2: len(str)]
    if len(str) == 2:
        return str * 3
    else:
        return last * 3