// Auto-visit profiles on Linkedin with iMacros
// Configure your linkedin credentials, the group and your proxy if needed.
// To learn more about iMacros: http://bit.ly/1CImBoM


// 1. Variables Initialization


var macro, proxy, linkedinGroup, i, j;

macro = '';

linkedinGroup = '';


// 2. Macro Initialization


macro += 'CODE:' + '\n';

macro += 'SET !TIMEOUT_STEP 2' + '\n';

macro += 'SET !TIMEOUT_TAG 2' + '\n';

macro += 'SET !TIMEOUT_PAGE 45' + '\n';

macro += 'SET !ERRORIGNORE YES' + '\n';


// 3. Auto-Visit & Close Profiles


macro += 'WAIT SECONDS=2' + '\n';

macro += 'URL GOTO=' + linkedinGroup + '\n';

for (i = 2; i <= 25; i++) {

	for (j = 1; j <= 20; j++) {
		macro += 'EVENT TYPE=CLICK SELECTOR="#member-list>LI:nth-of-type(' + j + ') A>IMG" BUTTON=0 MODIFIERS="meta"' + '\n';
		macro += 'WAIT SECONDS=2' + '\n';
	}

	macro += 'TAB CLOSEALLOTHERS' + '\n';

	macro += 'WAIT SECONDS=20' + '\n';
	macro += 'TAG POS=1 TYPE=A ATTR=TXT:' + i + '\n';

}


// 4. Run The Macro


iimDisplay("iMacro is now running. Let's hack growth.");

iimPlay(macro);