  __      __       .__                                ___________     
/  \    /  \ ____ |  |   ____  ____   _____   ____   \__    ___/___  
\   \/\/   // __ \|  | _/ ___\/  _ \ /     \_/ __ \    |    | /  _ \ 
 \        /\  ___/|  |_\  \__(  <_> )  Y Y  \  ___/    |    |(  <_> )
  \__/\  /  \___  >____/\___  >____/|__|_|  /\___  >   |____| \____/ 
       \/       \/          \/            \/     \/                  
   ________                __      __            .__       .___      
   \______ \   _______  __/  \    /  \___________|  |    __| _/      
    |    |  \_/ __ \  \/ /\   \/\/   /  _ \_  __ \  |   / __ |       
    |    `   \  ___/\   /  \        (  <_> )  | \/  |__/ /_/ |       
   /_______  /\___  >\_/    \__/\  / \____/|__|  |____/\____ |       
           \/     \/             \/                         \/                               


//**************************  INTRO  **************************\\

DevWorld is a React App meant to help developers share posts and help
other developers by leaving comments. This app uses an API to process
the registration process and hash important info before storing to 
MongoDB as the back end. 

Using React Hooks, Javascript and Style Components, we created 
an app that is scalable to any screen size and also includes a dark
mode that changes the background to a color that helps with less 
eye strain.

DevWorld also use other API's to reteive info from your Github and 
Gravatar accounts. On your profile, you can share to other developers 
the recents repositories.     



//**************************  ADDONS  **************************\\

List of NPMs added:
├── axios@0.24.0
├── bcryptjs@2.4.3
├── concurrently@6.4.0
├── config@3.3.6
├── express-validator@6.13.0
├── express@4.17.1
├── gravatar@1.8.2
├── jsonwebtoken@8.5.1
├── mongoose@6.0.13
├── nodemon@2.0.15
├── normalize-url@7.0.2
├── request@2.88.2
├── bindings@1.5.0 
├── file-uri-to-path@1.0.0 
├── moment@2.29.1
├── nan@2.15.0 
├── react-dom@17.0.2
├── react-moment@1.1.1
├── react-redux@7.2.6
├── react-router-dom@5.3.0
├── react-scripts@4.0.3
├── react@17.0.2
├── redux-devtools-extension@2.13.9
├── redux-thunk@2.4.1
├── redux@4.1.2
├── styled-components@5.3.3
├── uuid@8.3.2
└── web-vitals@1.1.2



//**************************  USAGE  **************************\\

With DevWorld, you start be registering for an account using the 
sign up page. If the email you are using has a Gravatar (Gravatar.com)
attached to it, the app will automatically retreive the gravatar 
and set as your profile picture. 

Once you create your account, you want to start off by creating a 
profile so that others can read your bio and see your creditenitals. 

After you create your profile, you will be directed to the dashboard, 
where you can start adding your education and experience. Once you 
add either education or experience creditentials, you can see and
delete them from the dashboard screen.

At the bottom of the dashboard, you can delete your account and it 
will delete your profile and all the posts and comments you made.

In the navigation bar, there is a page for the developers, this 
page is used for veiwing all the profiles. 

Once you select a profile, you can view the developer's bio, 
credentials and if you put your Github username in the edit profile
page, you cna view the last 5 repos from thier Github account. 

Back to the navigation bar and there is a page for all the posts 
between all the developers. One the top of the page, you can write 
a post about something that you may need help with or want to share 
with other developers.

One each post you can add a like or hit dislike (we don't show the 
number of dislikes). If you click on the comments, you can see the 
post on new page with all the comments about for that post on that
page. 

If you are logged in, you can either delete your post or comment 
by clicking on the red X. 

After you are done interacting with other developer, you can log 
out and come back anytime to connect with other developers.       



//*************************  ROADMAP  *************************\\

With DevWorld, we do not plan on updating any features in the future. 
This projects will help be the base of other apps we create.  



//*************************  AUTHOR  *************************\\

  ______               __   _______       ______              __             
 |   _  \ .-----.-----|  |_|   _   .-----|   _  \ .---.-.----|__.--.--.-----.
 |.  |   \|  _  |     |   _|.  1   |  -__|.  |   \|  _  |   _|  |  |  |__ --|
 |.  |    |_____|__|__|____|.  _   |_____|.  |    |___._|__| |__|_____|_____|
 |:  1    /                |:  1    \    |:  1    /                          
 |::.. . /                 |::.. .  /    |::.. . /                           
 `------'                  `-------'     `------'                            
                                                                             
                             All rights reserved.
