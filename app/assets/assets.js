import user_image from './user-image.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import automobile_project from './automobile_project.png';
import cookbook from './cookbook.jpg';
import unishare_project from './unishre_project.jpg';
import m1 from './m1.png';
import weather_app from './weather_app.jpg';
import hd from './hd.png';

export const assets = {
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    figma,
    git,
    mongodb,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark,
    automobile_project,
    cookbook,
    unishare_project,
    m1,
    weather_app,
    hd
};

export const workData = [
    {
        title: 'Automobile Service Time Logging & Appointment System',
        description: 'Enterprise Application Development Project',
        bgImage: assets.automobile_project,
        githubLink: 'https://github.com/ravndu-dlshan/asms-frontend',
        fullDescription: 'The Automobile Service Management System enables customers to book appointments, view real-time service progress, and request modifications, while employees can log time, update progress, and monitor workloads. I developed the backend using Spring Boot with role-based authentication and RESTful APIs, and contributed to building the frontend with React.js and real-time updates using WebSockets.',
        level: 'Level 3 – Enterprise Application Development Project'
    },
    {
        title: 'CookBook – Interactive Cookbook & Streaming Platform',
        description: 'Level 2 - Software Project',
        bgImage: assets.cookbook,
        githubLink: 'https://github.com/Kaveen-Ambegoda/cookbook-app',
        fullDescription: 'Built a wellness forum with responsive UI using Next.js (TypeScript) & Tailwind CSS, RESTful APIs with ASP.NET Core, and MS SQL via Entity Framework Core. Features include user posts, comments, and a custom diet planning calculator, developed in an Agile team. Tech Stack: Next.js (TypeScript), Tailwind CSS, ASP.NET Core Web API, Entity Framework Core, MS SQL',
        level: 'Level 2 - Software Project'
    },
    {
        title: 'UniShare – University File Sharing & Communication System',
        description: 'Level 3 — Academic Project (Network Programming)',
        bgImage: assets.unishare_project,
        githubLink: 'https://github.com/hasathps/Unishare-Fileshare_-_Communication_System',
        fullDescription: 'A web-based platform that enables university students to share study materials, upload files, and collaborate through module-based real-time chat. Includes organized file libraries, drag-and-drop uploads, and analytics for monitoring user activity. Tech Stack: Core Java, ReactVite, Javascript, postgresql',
        level: 'Level 3 — Academic Project (Network Programming)'
    },
    {
        title: 'UniversityEvents-MobileApp',
        description: 'Level 3 - Academic Project (Mobile Application Development)',
        bgImage: assets.m1,
        githubLink: 'https://github.com/DulshanRavidu/university-events-mobileapp',
        fullDescription: 'A modern cross-platform mobile application built to help university students discover, register for, and manage campus events. The app includes authentication, dynamic event listings, category filtering, favorites management, and an AI-powered chatbot assistant. It ensures a smooth user experience using clean UI design, optimized navigation, and persistent state management. Tech Stack: React Native (Expo), Typescript',
        level: 'Level 3 - Academic Project (Mobile Application Development)'
    },
    {
        title: 'Weather App - Flutter Mobile Application',
        description: 'Mobile Weather Application',
        bgImage: assets.weather_app,
        githubLink: 'https://github.com/DulshanRavidu/personalized_weather_app',
        fullDescription: 'A Flutter mobile weather application with student index input that derives coordinates, automatic coordinate calculation converting student index to latitude/longitude, and real-time weather data from Open-Meteo API. Features include beautiful modern UI with gradient backgrounds adapting to weather conditions, weather-specific icons and colors, card-based design with smooth animations, offline support with cached data, error handling with friendly messages, request URL display for verification, and loading states with visual feedback. Tech Stack: Flutter, Dart, Open-Meteo API',
        level: 'Mobile Application Development'
    },
    {
        title: 'GoGoSnake – Interactive Snake Game',
        description: 'Level 3 - Hardware Project (Academic Project)',
        bgImage: assets.hd,
        linkedinLink: 'https://www.linkedin.com/feed/update/urn:li:activity:7223719723329331200/',
        fullDescription: 'GoGoSnake is a modern snake game built on Raspberry Pi, featuring 3D NeoPixel LED visuals, dual remote controllers, and load cell detection for an interactive gaming experience. Developed using MicroPython on Raspberry Pi Zero 2W, with Next.js for the frontend and FastAPI for backend services. Tech Stack: MicroPython (Raspberry Pi Zero 2W), Next.js, FastAPI',
        level: 'Level 3 - Hardware Project (Academic Project)'
    },
]

export const serviceData = [
    { icon: assets.web_icon, title: 'Web design', description: 'Web development is the process of building, programming...', link: '' },
    { icon: assets.mobile_icon, title: 'Mobile app', description: 'Mobile app development involves creating software for mobile devices...', link: '' },
    { icon: assets.ui_icon, title: 'UI/UX design', description: 'UI/UX design focuses on creating a seamless user experience...', link: '' },
    { icon: assets.graphics_icon, title: 'Graphics design', description: 'Creative design solutions to enhance visual communication...', link: '' },
]

export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Languages', description: 'HTML, CSS, JavaScript React Js, Next Js' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'BScHons.(IT) in University of Moratuwa' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Built more than 5 projects' }
];

export const toolsData = [
    assets.vscode, assets.firebase, assets.mongodb, assets.figma, assets.git
];

