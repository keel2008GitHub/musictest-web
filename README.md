# Manual
### Step 1. setup
> 1. open termial on your mac.
> 2. ```git clone https://github.com/keel2008GitHub/musictest-web```
> 3. Copy & paste all source code from musictest-web to your musictest . ( pycharm community edition is recommended )
> 4. Create a python3 Project interceptor. ( Important!! )
> 5. Open the terminal tab at the bottom of pycharm, typing:
> 6. ```pip install -r requirements.txt```

### Step 2. Config web server.
> 1. Open musicTest3WebServer with your ide. ( pycharm community edition is recommended )
> 2. Edit scorer.py, uncomment ```# print(doScore())``` and run, confirm music notes appeared at the ide console. 
> 3. Edit app.py and change the variable "MusicTest3Directory" to your own directoy. 

### Step 3. Config music test3.
> 1. copy the mix_audio.py.bak to your musicTest3 directory, change name to mix_audio.py.
> 2. Open a Terminal, cd to your musicTest3 directory, and try to run : ```shell
 ./venv/bin/python ./mix_audio.py "['E-6|1.25', 'D-7|2.50', 'E-7|4.00', 'C-7|5.25', 'C-7|6.50', 'A-6|8.00', 'C-7|9.25', 'B-6|10.50', 'A-6|12.00', 'A-6|13.25', 'B-6|14.50', 'A-6|16.00', 'B-6|17.25', 'C-7|18.50', 'C-7|20.00', 'B-6|21.25', 'A-6|22.50', 'A-6|24.00', 'A-6|25.25', 'D-7|26.50', 'C-7|28.00', 'C-7|29.25', 'C-7|30.50', 'B-6|32.00']"  ```
> 3. Confirmed that whether you can hear a passage of midi.

### Step 4. run web server.
> 1. Run app.py and confirm that ``` * Running on http://127.0.0.1:5000/ (Press CTRL+C to quit)``` appeared at the ide console.
> 2. Open a web browser, either chrome or fire fox but safari ( H5 Audio is not supported at safari.)
> 3. Access http://localhost:5000 and see the index page of Song.

### Step 5. Record voice into notes and play it as midi song.
> 1. Access index page of Song. (Step 4.3)
> 2. Click "rec" button.
> 3. Sing a song or play a music with your mobile beside the speaker of you mac, it keeps 16 seconds.
> 4. After recording, notes will appears at the middle of the page.
> 5. Click "play" button and waiting a little while, you can hear mixed midi is been played.

### Some Traps.
> 1. At Step 5, I've Clicked the "rec" button but noting happened. -> If you are using safari, please change to chrome or firefox, because Web recorder 'Audio' is not supported with safari.
> 2. At Step 4, Im trying to run the server but nothing happened.  -> Please confirmed that Step 1.4 is running successfully.
> 3. I've got successfully between step 1~4 but failed at the Step 5. -> Please lived a message for me.