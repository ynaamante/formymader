const config = {
  /* 
  ████████████████████████████████████████
  🔧 BASIC SETTINGS (EDIT FREELY)
  ████████████████████████████████████████
  */

  // 🔐 Passcode Page
  correctPasscode: "0510", // Change this to any 4-digit code (the passcode for access)
  passcodeTitle: "Enter Passcode", // Title displayed on the passcode entry page
  successMessage: "GALING NAMAN NI MAMI :)", // Message shown upon successful passcode entry
  redirectMessage: "Redirecting...", // Message displayed while redirecting after success
  incorrectPasscodeMessage: "Incorrect passcode, hint: MOTHERS DAY AND BIRTHDAY MO", // Message shown for incorrect passcode
  cancelButtonText: "Cancel", // Text for the cancel button

  // 🔍 Question Page
  searchPlaceholder: "Search Google or type a URL", // Placeholder text in the search input
  trendingTitle: "Trending searches", // Title for the trending searches section
  trendingSearches: [
    "Bakit maganda ang anak ni Nina na si Yna?", // Example trending search query
    "Benefits kapag mataas ang baon ng anak", // Another example query
    `bakit ulirang ina si Nina?`, // A personalized trending search
  ],
  proTip: 'Pro tip: try searching "Who is the best mother?" ;)', // Helpful tip for users

  // ⏳ Timer Page
  anniversaryDate: "2003-05-10", // 📅 Set your anniversary date here (used for the timer)
  timerTitle: "You have been the best Mom since:", // Title displayed on the timer page
  timerMessage: "... and still counting <3", // Message shown alongside the timer
  timeUnits: {
    days: "Days", // Label for days in the timer
    hours: "Hours", // Label for hours in the timer
    minutes: "Minutes", // Label for minutes in the timer
    seconds: "Seconds", // Label for seconds in the timer
  },

  // 📸 Recap Page
  recapTitle: "Let's recap our time together", // Title for the recap page
  clickMeText: "Click me!", // Text prompting users to interact

  recapSections: [
    { label: "Messages", path: "/recap/message", icon: "Message" }, // Section for messages
    { label: "Pictures", path: "/recap/pictures", icon: "Image" }, // Section for pictures
    { label: "Music", path: "/recap/music", icon: "Music" }, // Section for music
  ],

  // 🎵 Music Page
  musicTitle: "Songs that remind me of you (click it!)", // Title for the music page
 musicGallery: [
  {
    title: "I Am Woman",
    artist: "Emmy Meli",
    left: "5%",
    top: "5%",
    youtubeId: "_F3mLfP-yFs", // https://www.youtube.com/watch?v=JtC2RchW0zo
  },
  {
    title: "Stronger",
    artist: "Kelly Clarkson",
    left: "40%",
    top: "15%",
    youtubeId: "Xn676-fLq7I", // https://www.youtube.com/watch?v=Xn676-fLq7I
  },
  {
    title: "Beautiful",
    artist: "Christina Aguilera",
    left: "15%",
    top: "40%",
    youtubeId: "eAfyFTzZDMM", // https://www.youtube.com/watch?v=eAfyFTzZDMM
  },
  {
    title: "Girl on Fire",
    artist: "Alicia Keys",
    left: "30%",
    top: "75%",
    youtubeId: "J91ti_MpdHA", // https://www.youtube.com/watch?v=J91ti_MpdHA
  },
  {
    title: "Run the World (Girls)",
    artist: "Beyoncé",
    left: "5%",
    top: "65%",
    youtubeId: "VBmMU_iwe6U", // https://www.youtube.com/watch?v=VBmMU_iwe6U
  },
  {
    title: "Who Says",
    artist: "Selena Gomez",
    left: "25%",
    top: "90%",
    youtubeId: "BzE1mX4Px0I", // https://www.youtube.com/watch?v=BzE1mX4Px0I
  },
  {
    title: "Warrior",
    artist: "Demi Lovato",
    left: "35%",
    top: "50%",
    youtubeId: "UFeJkfB4xKo", // https://www.youtube.com/watch?v=QTcL6Xc_eMM
  },
  {
    title: "Dangerous Woman",
    artist: "Ariana Grande",
    left: "10%",
    top: "25%",
    youtubeId: "9WbCfHutDSE", // https://www.youtube.com/watch?v=9WbCfHutDSE
  },
],


    // 📝 Message Recap Page
    messageTitle: "Your Precious Moment to be Remembered", // Title for the messages recap page
    messageGallery: [
      { title: " March 23, 2000", description: "A beautiful day to remember." }, // Message entry
      { title: "March 23 2000,", description: "Cherishing your Moments." },
      { title: "March 23 2000", description: "A picture that will never gets old❤️" },
    ],
  
    // 📸 Picture Recap Page
    pictureTitle: "Our little pictures", // Title for the pictures recap page
    pictureGallery: [
      { title: "Me and You ", description: "Newborn Yna with Mommy " }, // Picture entry
      { title: "Ate and You", description: "Newborn Jc with Mommy" },
      { title: "Me, Jed, Ate with you ", description: "Sorry wala si Nathan heheheh  🏖️" },
    ],
  

  // 💌 Love Letter Page
  loveLetterMessage: "Hi, Happy Birthday and Happy Mothers Day Mami💖", // Message displayed on the love letter page

  // 🎇 Closing Page
  closingMessage: "Thank you for everything, (sana wag mo bawasan baon ko hehhe pumapasok talaga ako ) 💖 More Birthdays and Mothers Day to come mwa mwa.", // Closing message displayed

  /* 
  ████████████████████████████████████████
  ⚠️ ADVANCED SETTINGS (DO NOT TOUCH UNLESS YOU KNOW WHAT YOU'RE DOING)
  ████████████████████████████████████████
  */

  // 📌 Paths (Only change if you are a developer or modifying routes)
  redirectPath: "/question", // Path to redirect after passcode entry
  timerRedirectPath: "/timer", // Path to redirect to the timer page
  questionRedirectPath: "/question", // Path to redirect to the question page
  recapRedirectPath: "/recap", // Path to redirect to the recap page
  recapPreviousPage: "/timer", // Path to the previous page in the recap
  recapNextPage: "/letter", // Path to the next page in the recap
  letterNextPage: "/closing", // Path to the next page after the letter
  letterPreviousPage: "/letter", // Path to the previous page before the letter
  previousPageText: "Previous page", // Text for the previous page button
  nextPageText: "Next page", // Text for the next page button

  // 🔍 Search Queries (Only change if modifying search functionality)
  correctSearchQueries: [
    "How long have we been together?", // Example of a correct search query
    "how long have we been together", // Another example of a correct search query
     "Who is the best mother?",
  "who is the best mother",
  ],
};

export default config;
