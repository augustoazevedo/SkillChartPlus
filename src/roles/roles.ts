import skills from "./skills";
import { ROLES } from "./skills";


export default ROLES.map(role=>{return {
    name: role,
    categories: filterSkills(role)
}})


function filterSkills(role: string) {
    return skills.map(category => {
        const skillsFiltered = category.skills.filter(skill=>skill?.roles.indexOf(role)>=0)
        if(skillsFiltered.length > 0){
            let res =  {...category};
            res.skills = skillsFiltered;
            return res;
        }
        return null;
    }).filter(c=>c != null)
}