// Auto-visit profiles on Linkedin with iMacros
// Configure your linkedin credentials, the people query page and your proxy if needed.
// To learn more about iMacros: http://bit.ly/1CImBoM


// 1. Variables Initialization


var macro, proxy, linkedinEmail, linkedinPassword, linkedInPeopleSearch, i, j;

macro = '';

proxy = '';

linkedinEmail = '';

linkedinPassword = '';

linkedInPeopleSearch = ''


// 2. Macro Initialization


macro += 'CODE:' + '\n';

macro += 'SET !TIMEOUT_STEP 2' + '\n';

macro += 'SET !TIMEOUT_TAG 2' + '\n';

macro += 'SET !TIMEOUT_PAGE 45' + '\n';

macro += 'SET !ERRORIGNORE YES' + '\n';


// 3. Clear Cookies, Cache and Set a Proxy


macro += "CLEAR" + "\n";

if (proxy !== "") {
	macro += "PROXY ADDRESS=" + proxy + "\n";
}


// 4. Linkedin Sign In


macro += 'TAB T=1' + '\n';

macro += 'TAB CLOSEALLOTHERS' + '\n';

macro += 'WAIT SECONDS=1' + '\n';

macro += 'URL GOTO=https://www.linkedin.com/' + '\n';

macro += 'TAG POS=1 TYPE=INPUT:TEXT FORM=NAME:login ATTR=NAME:session_key CONTENT=' + linkedinEmail + '\n';

macro += 'TAG POS=1 TYPE=INPUT:PASSWORD FORM=NAME:login ATTR=NAME:session_password CONTENT=' + linkedinPassword + '\n';

macro += 'WAIT SECONDS=2' + '\n';

macro += 'TAG POS=1 TYPE=INPUT:SUBMIT FORM=NAME:login ATTR=NAME:signin' + '\n';


// 5. Auto-Visit & Close Profiles


macro += 'WAIT SECONDS=2' + '\n';

macro += 'URL GOTO=' + linkedInPeopleSearch + '\n';

for (i = 2; i <= 25; i++) {

	for (j = 1; j <= 12; j++) {
		macro += 'EVENT TYPE=CLICK SELECTOR="OL#results>LI:nth-of-type(' + j + ')>A>IMG" BUTTON=0 MODIFIERS="meta"' + '\n';
		macro += 'WAIT SECONDS=2' + '\n';
	}

	macro += 'TAB T=1' + '\n';

	macro += 'TAB CLOSEALLOTHERS\n';

	macro += 'WAIT SECONDS=20' + '\n';
	macro += 'TAG POS=1 TYPE=A ATTR=TXT:' + i + '\n';

}


// 6. Run The Macro


iimDisplay("iMacro is now running. Let's hack growth.");

iimPlay(macro);