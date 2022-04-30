# Politics of Code Final

**Title**: Baises in Names and AI <br> 
**Author**: Soojin <br> 
**Category**: Final Project <br> 
**Date**: 20 Apr - 2 May 2022 <br> 
**Deliverable**: 1. CSS/HTML/Javascript/API Data Visualization 2. Experiment & Critical Analysis <br>

## Project Brief

Using three APIs that predict the age, the nationality, and the gender of the given name, I developed a web-based data visualization model that visualizes the data associated with names. This project explores the world demographic through the lens of data, such as the 10 most powerful people, or the Interactive Media Faculty of NYUAD. While exploring the different groups of people and their names, we critically examine the AI biases in names and its impact. <br> 

[Access Project Here](https://soojin-lee0819.github.io/PoliticsOfCodeFinal)

<img src="images/mainpage.png" width="600">
<img src="images/gamepage.png" width="600">



## Project Description

AI (Articifial Intelligence) Machines are increasingly being used to make all kinds of important decisions including who can open a bank account (or who can't), what kind of health insurance coverage, or the job screenings. AI has many positive benefits, like freeing up our time to do more chllenging tasks or automating our work. 

However, despite the repeated claim that data-driven approaches are more objective than the past human methods, AI machines don't seem to liberate us completely from the thousands of years of human bias. This is because most of the AI programs use machine learning, which are done through data training. It is true that once the machine learning is trainned, the work can be done autonomously without much human intervention. However, AI machines are essentially trainned with human data and are programmed by huamn that it is inevitable for AI systems to continue projecting existing human biases, and further exacerbate those biases at a much faster rate. 


We hear about many AI bias mishaps such as  [Google’s facial recognition algorithm labeled black people as gorillas ](https://www.forbes.com/powerful-people/list/) or more recent [mishap with Amazon’s resume recommendation system
](https://www.reuters.com/article/us-amazon-com-jobs-automation-insight/amazon-scraps-secret-ai-recruiting-tool-that-showed-bias-against-women-idUSKCN1MK08G) where the algorithm taught it self that male candidates were preferable, penalizing the resumes containing the word "women". This isn't because Amazon has intentionally programmed it's screen machine to reject women applicants. Instead, it trained its algorithm using a decade of resumes from mostly white male applicants, which its algorithm repliaceted historical hiring patterns, discriminating against women applicants. Although Amazon abaondoned the tool in 2017 before deployment, it illustrates how algorithms can reproduce existing pattenrs of inequality. 



Due to this bias encoded in world embeddings, resumes that include a black-sounding name, female-sounding name, Jewish-sounding name, or Muslim-sounding-names programs are disciminated against the others. For example when Jahanzaib Ansari was looking for work in 2016m his job search hit a dead end, despite his qualified skills and experiences. It is only after Anglicizing his name to variations including Jason, Jordan and Jacob, he saw the immediate results. Such algorithmic bias in hiring process due to algorithmic blind scpots is highly unfair and frustrating. 

On to this complex issues in data algorithm, human biases associated to names, and its impact, I developed an interactive data visualization website that allows people to type in a name to receive an information about the given name such as gender, nationality, and age. Explopring the inferred profile of each name and looking at the bigger demographic of the people through the lens data, the project invites people to critically examine the biases in machine learning AIs and its impact. 

## Part 1: Developing Data Visualization using API

For the ConnectionsLab class, I created a data visualization game where players type in a name . I have elaborated on this project to add Gender API
The first part of the project was to develop a data visualization website ausing APIs. 


For this project, I am using three APIs which are: 

[agify API](https://api.agify.io/?name=michael) - An API for predicting the age of a person given their name.

[nationalize API](https://nationalize.io) - An API for predicting nationality from a name.

[gender API](https://genderize.io/?gclid=EAIaIQobChMIsfmD9dP_9QIVCcPVCh1d1gvhEAAYAiAAEgIeFfD_BwE) - An API to predict the gender of a person given their name


A person's name tells a lot about one’s identity. Albeit subconsciously, once we hear names, we immediately associate the names with the name owners' genders, nationalities, and even their ages. For example, my name “Soojin” is a typical Korean female name in Korea that people who are familiar with Korean culture would immediately start making assumptions about me upon introduction. For this project, using two APIs (agify API, nationalize API), that predict the age, and the nationality of the given name, I created a data visualization game. There are two elements to this project. The first is data visualization and the second is gamification. For the data visualization part, when the players type in a name and hit submit, the data about the name (the predicted age and the predicted nationality of the name) will be displayed in the form of bubbles. Based on this data visualization, the game was built. The predicted age will be added to the player's total ‘Age Score’. When the collective Age Score is above 500, the player win! But there’s a catch: if the player enters two names from the same country, the player lose! This game is for people who are culturally conscious, curious about human diversity, or people who live in a diverse community like the community members of NYUAD. Through the process of playing, I hope players have fun finding interesting data about the names around the world but also think critically about the biases and labels that exist in names and identities.



## Part 2: Experiment & Critical Analysis 

Using the data visualization website created above, I visualized the demographics of certain groups including: Interactive Media Faculty at NYUAD, Computer Science Faculty at NYUAD, and the [The World's Most Powerful People](https://www.forbes.com/powerful-people/list/
) by Forbes.

### NYUAD Interactive Media Faculty


<img src="images/IMfaculty.png" width="600">

Professor Mathura's In this simplification, three different professors Michael Allison, Michael . This shows how depending of how we process the data, the outcome can be significantly different. 


**List of IM faculties in Abu Dhabi**
- Aaron Sherwood
- Michael Allison
- Michael Ang
- Joerg Blumtritt
- Heather Dewey-Hagborg
- Jonny Farrow
- Mathura Govindarajan
- Michael Shiloh





### NYUAD Computer Science Faculty

<img src="images/CSfaculty.png" width="600">

Some names were simply not available in the dataset. Since most of the data are collected from Western countries, alini



**List of CS faculties in Abu Dhabi**
- Azza Abouzied
- Moumena Chaqfeh
- Alex Delis
- Djellel Difallah
- Nizar Habash
- Lefteris Kirousis
- Azzam Mourad
- Sana Odeh
- Mai Oudah
- Christina Pöpper
- Thomas Potsch
- Talal Rahwan
- Saurabh Ray
- Riyadh Baghdadi
- Hanan Salam
- Yasir Zaki


### 10 Most Powerful People

<img src="images/powerfulpeople.png" width="600">

**List of 10 Most Powerful People**
- Xi Jinping
- Vladimir Putin
- Donald Trump
- Angela Merkel
- Jeff Bezos
- Pope Francis
- Bill Gates
- Mohammed bin Salman Al Saud
- Narendra Modi
- Larry Page
