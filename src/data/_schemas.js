const format_str = (str) => {return str.toLowerCase().replace(/[\s.]/g, '_');}
const get_icon_path = (name) => {return `/${format_str(name)}.png`;}
const links = {
	"github": "https://github.com/geetu040",
	"linkedin": "https://www.linkedin.com/in/armaghan-shakir/",
	"instagram": "https://www.instagram.com/armaghan_shakir/",
	"kaggle": "https://www.kaggle.com/sacrum",
	"hackerrank": "https://www.hackerrank.com/raoarmaghanshak1",
	"facebook": "https://web.facebook.com/armaghan040",
	"google_developers": "https://developers.google.com/profile/u/armaghan",
	"stackoverflow": "https://stackoverflow.com/users/19437938/armaghan-shakir",
	"fiverr": "https://www.fiverr.com/iamgeetu",
	"upwork": "https://www.upwork.com/freelancers/~01ff62dd4134b2a230",
	"gmail": "raoarmaghanshakir040@gmail.com",
}
const get_profile_link = (name) => {
	return links[format_str(name)];
}

class Contact {
	constructor(name, line) {
		this.name = name;
		this.line = line
		this.profile = get_profile_link(name);
		this.icon = get_icon_path(name);
	}
}
class Tool {
	constructor(name) {
		this.name = name;
		this.icon = get_icon_path(name);
	}
}
class Information {
	constructor(title, description, about_title, about_description) {
		this.title = title;
		this.description = description;
		this.profile = get_icon_path("profile");
		this.about_title = about_title;
		this.about_description = about_description;
	}
}
class Project {
	constructor (name, description, tools, techs, links) {
		this.name = name;
		this.description = description;
		this.src = `/projects/${format_str(name)}.mp4`;
		this.techs = techs;
		this.tools = [];
		this.links = links;
		for (let i=0; i<links.length; i++) {
			links[i].icon = get_icon_path(links[i].icon)
		}

		tools.forEach((tool)=>{
			this.tools.push(new Tool(tool));
		})
	}
}
class Certificate {
	constructor (name, organization, link) {
		this.name = name;
		this.organization= organization;
		this.icon = get_icon_path(organization);
		this.link = link;
	}
}

export {
	format_str,
	get_icon_path,
	Contact,
	Tool,
	Information,
	Project,
	Certificate,
}