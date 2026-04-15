const redundant = (str) => {
    return () => str;
}

redundant('hello') // will return () => str
