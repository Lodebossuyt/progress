controladdin Progress
{
    Scripts = './modules/progress_bar/scripts/progress.js';
    StartupScript = './modules/progress_bar/scripts/startup.js';
    StyleSheets = './modules/progress_bar/styles/progress.css';
    MinimumHeight = 500;
    HorizontalStretch = true;
    VerticalStretch = true;

    // this talks to AL
    event IamReady();

    // this talks to JS
    procedure SetProgress(Progress: Integer)
}