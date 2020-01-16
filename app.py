# coding=utf-8
import json
import os
from flask_cors import CORS, cross_origin
import subprocess

from flask import Flask, render_template, request, make_response

import norepeatmusictheory
from audio_to_midi_melodia import fill_ui_beats, ui_beats_to_notes, notes_to_ui, audio_to_midi_notes

app = Flask(__name__)
CORS(app, supports_credentials=True)
app.config['SECRET_KEY'] = 'secret!'

pyPlayCd = os.getcwd()
py2PlayMusicshell = "%s/venv/bin/python %s/audio_to_midi_melodia.py" % (pyPlayCd, pyPlayCd)


@app.route('/', methods=['GET', 'POST'])
def index_html():
    rst = make_response(render_template('index.html', name='stronger'))
    rst.headers['cache-control'] = 'no-cache, no-store, must-revalidate'
    rst.headers['pragma'] = 'no-cache'

    return rst


@app.route('/humming', methods=['GET', 'POST'])
@cross_origin()
def humming():
    if request.method == 'POST':
        f = request.files['audioData']
        f.save(os.path.join('static', 'humming.wav'))
        notes = audio_to_midi_notes(infile=os.getcwd() + "/static/humming.wav",
                                    smooth=0.001, minduration=0.11, speed=100)
        return json.dumps({"notes": notes_to_ui(notes)})


@app.route('/format', methods=['GET', 'POST'])
@cross_origin()
def format():
    if request.method == 'POST':
        data = request.get_data()
        data2 = json.loads(data, encoding='raw_unicode_escape')
        filled_ui_beats = fill_ui_beats(data2["notes"])

        data = ui_beats_to_notes(filled_ui_beats)

        print(data)

        data_raw = []
        for i in data:
            data_raw.append([i[0], i[1], i[2].encode('raw_unicode_escape')])

        # norepeatmusictheory.determinelefthand(data_raw, [], nameoffile='finalversion.wav')

        return json.dumps({"notes": notes_to_ui(data)})


@app.route('/mix', methods=['GET', 'POST'])
@cross_origin()
def mix():
    if request.method == 'POST':
        data = request.get_data()
        data2 = json.loads(data, encoding='raw_unicode_escape')

        filled_ui_beats = fill_ui_beats(data2["notes"])

        data = ui_beats_to_notes(filled_ui_beats)

        data_raw = []
        for i in data:
            data_raw.append([i[0], i[1], i[2].encode('raw_unicode_escape')])

        ui_notes = notes_to_ui(data);

        print ui_notes

        os.chdir(pyPlayCd)

        print "Calling shell: %s" % (py2PlayMusicshell + " \"%s\"" % data_raw)
        # sub = subprocess.Popen(py2PlayMusicshell + " \"%s\"" % data_raw, shell=True, stdout=subprocess.PIPE)
        # sub.wait()
        # print sub.stdout.read()
        val = os.system(py2PlayMusicshell + " \"%s\"" % data_raw)

        #
        val = os.system("rm -rf ./musicpiece*")

        print val

        # norepeatmusictheory.determinelefthand(data_raw, [], nameoffile='finalversion.wav')

        return json.dumps({"notes": notes_to_ui(data)})


if __name__ == '__main__':
    app.run(debug=False, host='0.0.0.0', port=5000)
