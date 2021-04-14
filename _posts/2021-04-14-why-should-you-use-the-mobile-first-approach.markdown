---
layout: post
title:  "Why should you use the mobile first approach !"
img: "https://images.unsplash.com/photo-1554260570-47e791ab2fc7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80"
author: 'belkasmi zakariae'
---

![Image](https://images.unsplash.com/photo-1554260570-47e791ab2fc7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80)

# What is the mobile first approach ?

Probably you’ve been hearing about the mobile first approach quite a lot, and that’s for a reason, the mobile first approach is the practice of designing and developing the mobile version of your product and thene scaling up to the desktop version, this aims to give an emphasis on the mobile experience.

# Advantages of applying the mobile first approach ?


cell phones are embedded in our daily life, in january 2021 datareportal recorded 5.22 billion of the population are unique phone users.

![image](https://images.squarespace-cdn.com/content/v1/5b79011d266c077298791201/1611995332050-09FE9C1B7J9IR23QY3IF/ke17ZwdGBToddI8pDm48kNvT88LknE-K9M4pGNO0Iqd7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UbeDbaZv1s3QfpIA4TYnL5Qao8BosUKjCVjCf8TKewJIH3bqxw7fF48mhrq5Ulr0Hg/Global+Digital+Overview+January+2021+DataReportal?format=1000w)

This only means that when building a project, you should give a great emphasis to the mobile experience, and shift your thinking to the mobile first approach.

# Mobile first in practice: 

when developing your mobile version there is a method that I use, and it saving me time and effort, also I don’t use media queries, you start by building your mobile version and in your css you define your section :


`.section {
display : grid;
grid-template-column : repeat(auto-fit,minmax(200px,1fr));
grid-gap : 2em;
}`

these three lines of code, give you the ability to scale up to the desktop version without writing media queries, by using the css grid system.

I hope you like this quick article, if you find it helpful please share it with your fellow developers.

follow me on twitter for more infos :)

