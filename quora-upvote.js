// 1. Variables Initialization


var macro, quoraLink, i, j;

macro = '';

proxy = '';

quoraLink = '';


// 2. Macro


macro += 'CODE:' + '\n';

macro += 'SET !TIMEOUT_STEP 2' + '\n';

macro += 'SET !TIMEOUT_TAG 2' + '\n';

macro += 'SET !TIMEOUT_PAGE 45' + '\n';

macro += 'SET !ERRORIGNORE YES' + '\n';

macro += 'URL GOTO=' + quoraLink + '\n';

// 3. Open comments

for (i = 1; i <= 2; i++) {

	macro += 'TAG POS=' + i + ' TYPE=A ATTR=TXT:Comments*\n';
	macro += 'WAIT SECONDS=1' + '\n';
	macro += 'TAG POS=' + i + ' TYPE=A ATTR=TXT:Comments* CONTENT=EVENT:MOUSEOVER\n';
		
	macro += 'WAIT SECONDS=5' + '\n';

}

macro += 'WAIT SECONDS=20' + '\n';

// 4. Upvote everything

for (i = 1; i <= 50; i++) {

	for (j = 1; j <= 10; j++) {
		macro += 'TAG POS=' + j + ' TYPE=A ATTR=TXT:Upvote*\n';
		
		macro += 'WAIT SECONDS=2' + '\n';
	}
	macro += 'WAIT SECONDS=20' + '\n';

}


// 5. Run The Macro


iimDisplay("iMacro is now running. Let's hack growth.");

iimPlay(macro);