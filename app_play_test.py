import os

import norepeatmusictheory

#
# listttomt = [[0.0, 1.25, 'C-4'], [1.25, 1.75, 'C-4'], [3.0, 1.0, 'C-4'], [4.0, 0.5, 'None'], [4.5, 2.0, 'C-4'],
#              [6.5, 1.5, 'C-4'], [8.0, 0.5, 'None'], [8.5, 1.0, 'C-4'], [9.5, 1.25, 'C-4'], [10.75, 1.25, 'C-4'],
#              [12.0, 1.25, 'None'], [13.25, 1.25, 'C-4'], [14.5, 1.5, 'C-4'], [16.0, 1.0, 'None'], [17.0, 1.5, 'C-4'],
#              [18.5, 1.5, 'C-4'], [20.0, 1.25, 'C-4'], [21.25, 1.25, 'C-4'], [22.5, 1.0, 'C-4'], [23.5, 0.5, 'C-4'],
#              [24.0, 1.25, 'None'], [25.25, 2.0, 'C-4'], [27.25, 0.75, 'C-4'], [28.0, 0.75, 'None'],
#              [28.75, 1.25, 'C-4'], [30.0, 2.0, 'C-4']];
#
# # just one beat.

if __name__ == '__main__':
    a = [
        [0.0, 1.0, 'C-4'],
        [4.0, 4.0, 'None'],
        [8.0, 4.0, 'None'],
        [12.0, 4.0, 'None'],
        [16.0, 4.0, 'None'],
        [20.0, 4.0, 'None'],
        [24.0, 4.0, 'None'],
        [28.0, 4.0, 'None'],
        [32.0, 4.0, 'None']]

    c = [[0.0, 2.25, 'B-3'], [2.25, 0.5, 'B-3'], [3.0, 0.5, 'F#-3'], [3.75, 0.25, 'G-3'],
         [4.0, 0.5, 'None'], [4.5, 0.25, 'G#-3'], [5.0, 0.5, 'A-3'], [5.75, 0.75, 'G-3'], [7.5, 0.25, 'F-3'],
         [8.0, 0.5, 'F-3'], [8.75, 0.5, 'E-3'], [9.25, 0.5, 'E-3'], [10.0, 0.25, 'D-3'], [10.25, 0.25, 'D-3'],
         [10.75, 0.5, 'D-3'], [11.5, 0.25, 'C-3'], [11.75, 0.25, 'C-3'],
         [12.0, 0.75, 'None'], [12.75, 0.25, 'G-3'], [13.0, 0.25, 'G-3'], [13.5, 0.5, 'G-3'], [14.0, 0.25, 'F#-3'],
         [14.25, 0.25, 'F-3'], [14.75, 0.5, 'F-3'], [15.5, 0.25, 'E-3'],
         [16.0, 0.5, 'E-3'], [17.0, 0.75, 'D-3'], [19.0, 0.25, 'G-3'], [19.5, 0.25, 'F-3'],
         [20.0, 0.25, 'None'], [20.25, 0.25, 'E-3'], [21.0, 0.5, 'E-3'], [21.5, 0.25, 'E-3'], [23.75, 0.5, 'C-3'],
         [24.0, 0.25, 'None'], [24.25, 0.5, 'C-3'], [25.0, 0.5, 'G-3'], [25.75, 0.25, 'G-3'], [27.25, 0.25, 'A-3'],
         [27.75, 0.25, 'G-3'],
         [28.0, 1.0, 'None'], [29.0, 0.25, 'F-3'], [29.75, 0.5, 'F-3'], [30.5, 0.5, 'E-3'], [31.25, 0.5, 'E-3'],
         [31.75, 0.5, 'C-3'],
         [32.0, 4, 'None']]

    c = [[0.0, 0.5, 'C-6'],
         [0.5, 2.0, 'None'],
         [2.5, 1.5, 'None'],
         [4.0, 1.75, 'None'],
         [5.75, 2.25, 'None'],
         [8.0, 1.25, 'None'], [9.25, 2.0, 'G-5'], [11.25, 0.75, 'A-5'], [12.0, 1.5, 'None'], [13.5, 1.5, 'A-5'],
         [15.0, 1.0, 'A-5'], [16.0, 2.0, 'None'], [18.0, 2.0, 'D-6'], [20.0, 0.75, 'None'], [20.75, 3.25, 'G-5'],
         [24.0, 4.0, 'None'], [28.0, 4.0, 'None'], [32.0, 0.0, 'None']]

    downbettomt = []

    norepeatmusictheory.determinelefthand(c, downbettomt, nameoffile='finalversion.wav')

