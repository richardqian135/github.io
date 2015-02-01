var bio = {
	"name" : "Willam Smith",
	"role" : "Web Developer",
	"contacts" : {
		"mobile" : "1-800-123-4567",
		"email" : "hack@hack.com",
		"twitter" : "@WillamSmith",
		"github" : "WillamSmith",
		"blog" : "WillamSmith.blog.com",
		"facebook" : "willamsmithFB",
		"location" : "Chicago, IL" 
	},
	"welcome message" : "Welcome to my Resume site",
	"skills" : ["Java coding", "visual C++", "web design", "Team leader"],
	"pic" : "images/fry.jpg",
	"display" : function(){
		var formatedName = HTMLheaderName.replace("%data%", bio.name);
		var formatedRole = HTMLheaderRole.replace("%data%", bio.role);
		var formatedPic = HTMLbioPic.replace("%data%", bio.pic);
		var formatWelcome = HTMLWelcomeMsg.replace("%data%", bio["welcome message"]);
		var formatContacts = HTMLcontactGeneric.replace("%contact%", bio.contacts);
		var formatMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
		var formatEmail = HTMLemail.replace("%data%", bio.contacts.email);
		var formatTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
		var formatGithub = HTMLgithub.replace("%data%", bio.contacts.github);
		var formatBlog = HTMLblog.replace("%data%", bio.contacts.blog);
		var formatLocation = HTMLlocation.replace("%data%", bio.contacts.location);
		
			
		$("#header").prepend(formatedRole);
		$("#header").prepend(formatedName);
		//$("#header").append(HTMLcontactStart);
		$("#topContacts").append(formatMobile);
		$("#topContacts").append(formatEmail);
		$("#topContacts").append(formatTwitter);
		$("#topContacts").append(formatGithub);
		//$("#topContacts").append(formatBlog);
		$("#topContacts").append(formatLocation);
		$("#header").append(formatedPic);
		$("#header").append(formatWelcome);
		
		if(bio.skills.length > 0){
		$("#header").append(HTMLskillsStart);
		var formattedSkills;
		for(skill in bio.skills){
			formattedSkills = HTMLskills.replace("%data%", bio.skills[skill]);
			$("#skills").append(formattedSkills);
			
		};
	};
	}
};


	
var work = {
  "jobs": [
    {
      "employer": "ITT",
      "title": "Teacher",
      "location": "Mountain View, CA",
      "dates": "Feb 2014 - Current",
      "description": "Teach MATH101， MATH201."
    },
    {
      "employer": "LearnBIG",
      "title": "Software Engineer",
      "location": "Seattle, WA",
      "dates": "May 2013 - Jan 2014",
      "description": "Design and implement applications for trading."
    },
    {
      "employer": "LEAD Academy Charter High School",
      "title": "Science Teacher",
      "location": "Nashville, TN",
      "dates": "Jul 2012 - May 2013",
      "description": "Teach science classes."
    },
    {
      "employer": "Stratford High School",
      "title": "Science Teacher",
      "location": "Nashville, TN",
      "dates": "Jun 2009 - Jun 2012",
      "description": "Teach physics."
    }
  ]
};

work.display = function (){
	for(i in work.jobs){
		$("#workExperience").append(HTMLworkStart);
		var job = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
		var title = HTMLworkTitle.replace("%data%", work.jobs[i].title);
		var year = HTMLworkDates.replace("%data%", work.jobs[i].dates);
		var desc = HTMLworkDescription.replace("%data%", work.jobs[i].description);
		//console.log(job);
		//console.log(work.employer.length);
		$(".work-entry:last").append(job + title);
		$(".work-entry:last").append(year);
		$(".work-entry:last").append(desc);
	}
};
	


var education = {
	"schools": [{
     "name": "University of Tech",
     "location": "Texas",
     "degree": "B.S Scrience",
     "majors": "Chemistry",
     "dates": "1988",
     "url": "uoft.com"},
	 {
     "name": "University of Java",
     "location": "Java, CA",
     "degree": "M.S Scrience",
     "majors": "Chemistry",
     "dates": "1992",
     "url": "uoft.com"},
	 {
     "name": "University of Cal",
     "location": "Cal, FL",
     "degree": "Ph.D Scrience",
     "majors": "Chemistry",
     "dates": 1996,
     "url": "uoft.com"}],
"onlineCourses": [{
     "title": "C++",
	 "class": "IT102",
     "school": "Udacity",
     "dates": "1999",
	 "url": "Udacity.com"
	}
	 ],
"display": function(){
	for(sch in education.schools){
		$("#education").append(HTMLschoolStart);	
		$(".education-entry:last").append(HTMLschoolName.replace("%data%", education.schools[sch].name));
		$(".education-entry:last").append(HTMLschoolDegree.replace("%data%", education.schools[sch].degree));
		$(".education-entry:last").append(HTMLschoolDates.replace("%data%", education.schools[sch].dates));
		$(".education-entry:last").append(HTMLschoolLocation.replace("%data%", education.schools[sch].location));
		$(".education-entry:last").append(HTMLschoolMajor.replace("%data%", education.schools[sch].majors));
	}
	
	$(".education-entry:last").append(HTMLonlineClasses);
		
	for(online in education.onlineCourses){
		$(".education-entry:last").append(HTMLonlineTitle.replace("%data%", education.onlineCourses[online].title));
		$(".education-entry:last").append(HTMLonlineSchool.replace("%data%", education.onlineCourses[online].school));
		$(".education-entry:last").append(HTMLonlineDates.replace("%data%", education.onlineCourses[online].dates));
		$(".education-entry:last").append(HTMLonlineURL.replace("%data%", education.onlineCourses[online].url));
	}
	}
};
	
var projects = {
	"proj" : [{ "title" : "project 1",
				"date" : "1997.12.31",
				"description" : "ER drawing",
				"image" : "images/er.gif"
	},
	{ "title" : "project 2",
				"date" : "2000.12.31",
				"description" : "Design tables",
				"image" : "images/table.jpg"
	}
	],
	"display" : function(){
		$("#projects").append(HTMLprojectStart);				
		for(project in projects.proj){
			$(".project-entry:last").append(HTMLprojectTitle.replace("%data%", projects.proj[project].title));
			$(".project-entry:last").append(HTMLprojectDates.replace("%data%", projects.proj[project].date));
			$(".project-entry:last").append(HTMLprojectDescription.replace("%data%", projects.proj[project].description));	
			$(".project-entry:last").append(HTMLprojectImage.replace("%data%", projects.proj[project].image));	
		}
	}
    };
	
bio.display();
work.display();
projects.display();
education.display();


$("#mapDiv").append(googleMap);

var Car = function(loc){
    this.loc = loc;
	//this.move = function(){
    //this.loc++;
	//}; 
};
//about superclass and sub class
// Your code goes here!
Car.prototype.move = function(){
   this.loc++;
};

var Van = function(loc){
	Car.call(this, loc);
};

Van.prototype = new Car();//Object.creat(Car.prototype);
//Van.prototype.constructor = Van;
Van.prototype.grab = function(){
	this.loc--;
};

var zed = new Car(3);
zed.move();
console.log(zed.loc);

var cc = new Van(9);
cc.move();
console.log(cc.loc);
cc.grab();
console.log(cc.loc);



