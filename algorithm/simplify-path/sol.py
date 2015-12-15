class Solution:
    # @param path, a string
    # @return a string
    def simplifyPath(self, path):
        folders = filter(lambda p: p != '' and p != '.', path.split('/'))
        f = lambda x: [] if x < 0 else f(x - 1) + [folders[x]] if folders[x] != '..' else f(x - 1)[:-1]
        return '/' + '/'.join(f(len(folders) - 1))