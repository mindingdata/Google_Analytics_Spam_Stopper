# Google Analytics Spam Stopper

A simple tool to take a list of spam domains, concatenate them to be input into Google Analytics and remove them from your referral lists. Helpful when you are getting slammed with Google Analytics ghost referrals aka spam.

After editing `spamlist.txt` you should run
```
cat spamlist.txt | uniq > spamlist.txt
```
to have unique rows.

To run, from a command line go to the Node folder in the project,
```
cd Node
```

and run
```
node run.js
```

In the root directory you will have an `output.txt` file with the long string to be copied and pasted into GA.

Alternatively you can get the direct output here:
https://raw.githubusercontent.com/mindingdata/Google_Analytics_Spam_Stopper/master/output.txt

Unsure where you should be pasting that? Check out a helpful guide here:
http://mindingdata.com/2016/01/10/blocking-google-analytics-referral-spam/
