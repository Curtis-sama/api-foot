

/*

exercise: composant qui prend en parametre une teamligue afficher la "venue" 

*/

import { teamsLigue1 } from "../../teams_ligue1"
import { useState } from "react"



const Info = ({ infoTeams }) => {
	console.log(infoTeams.team.logo)
	const [change, setChange] = useState(true)

	function handleClick() {
		setChange(!change)

	}
const etet = change && "okok"
const toto = change ? "ok" : "non"
	return (

		<div className="teams" onClick={() => handleClick()}>
			{change ?
				<div className="logo" >
					<img src={infoTeams.team.logo} />
				</div>
			
			:
				<div className="venue" >
					{infoTeams.venue.address} - {infoTeams.venue.capacity} - {infoTeams.venue.city} - {infoTeams.venue.id} - {infoTeams.venue.image} - {infoTeams.venue.surface}
				</div>
			}



		</div>
	)
}





const Content = ({ teamsLigue1 }) => {


	return (
		<div className="content">
			{teamsLigue1.map((infoTeams, index) =>
				<Info key={index} infoTeams={infoTeams} />
			)}
		</div>
	)
}

export default Content