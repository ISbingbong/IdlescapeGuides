/* eslint-disable react/no-unescaped-entities */
import { Text } from '@chakra-ui/react';
import React from 'react';
import { abilitiesIds } from '../../../utils/abilityList';
import { abilityIcon, SubHeading } from '../../../utils/NavigationTabsList';

function CombatGuide() {
	return (
		<>
			There are four styles of combat that you can choose to do: melee, ranged, magic, or hybrid. Melee makes use
			of melee weapons (such as scimitars and daggers). Ranged makes use of ranged weapons (such as longbows and
			crossbows). Magic makes use of magic weapons (such as staffs and wands). Hybrid utilizes 2 or more of the
			above skills with weapons that provide hybrid statistics (such as Shapeless Scythe)
			<SubHeading size='lg'>Player and Equipment Stats</SubHeading>
			Both your equipment and your skill levels decide how effective you are in combat. You must know how they
			work in order to make effective loadouts.
			<SubHeading>The Offensive Stats</SubHeading>
			<b>Strength</b> (Melee), <b>Dexterity</b> (Ranged), and <b>Intelligence</b> (Magic) are the main offensive
			stats and modify your overall damage for their respective fields. They are also affected by Combat Skill
			Levels (<b>Strength</b>, <b>Ranged</b>, and <b>Magic</b>). <br />
			<b>Crit Chance</b> is your chance to hit an enemy for Critical damage, when you do hit a crit, it'll add
			damage based off your <b>Crit Multiplier</b>. Having a Crit Chance of 30% and a Crit Mult of 50% means that
			you have a 30% chance on hit to do 50% more damage. <br />
			<b>Accuracy</b> is what decides your hit chance against the enemy. There are several different types of
			accuracy, where the types of abilities you use will be affected by those. For example the ability 'Fireball'
			will make use of Magic Accuracy and Fire Accuracy.
			<SubHeading>The Defensive Stats</SubHeading>
			<b>Protection</b> is your physical damage reduction. Any melee or ranged damage that an enemy hits you with
			will be reduced using this value. <br />
			<b>Resistance</b> is your magic damage reduction. Any magic damage that an enemy hits you with will be
			reduced using this value. <br />
			<b>Agility</b> is used to calculate your dodge chance. The higher this value is, the less likely it is that
			an enemy will be able to hit you. <br />
			<b>Stamina</b> determines the value of your total health, in addition to your <b>Constitution</b> level
			<SubHeading size='lg'>Affinities</SubHeading>
			Affinities are used in calculating your effectiveness for each subclass of combat, both for offense and
			defense. A good example of this are Breatplates, which give a high amount of negative offensive affinities,
			but lots of positive defensive affinities in return. This makes them very effective at tanking, but not good
			at outputting damage. Affinities are added together from item to item (ex. a fire amulet provides +15% fire
			affinity, which would be added with the +35% fire affinity given by the Mantle of Flame to give a total fire
			affinity of +50%). Affinities can increase or decrease your total effectiveness in combat, but not as
			drastically as it first seems. Each ability used takes an average of all styles used in an ability.
			<br />
			Player Stats: +50% magic affinity,, +115% fire affinity
			<br />
			Ability Being Used: Fireball (1x Magic, 1.33x Fire) {abilityIcon(abilitiesIds.fire_ball)}
			<br />
			(Magicaffinity x Magicmultiplier1 + Fireaffinity x Firemultiplier2) / 2
			<br />
			↓↓
			<br />
			(1.00 x 1.50 + 1.33 x 2.15) / 2
			<br />
			↓↓
			<br />
			Effectiveness = 2.179
			<Text color='gray' fontStyle='oblique'>
				A significant part of this guide was written by HeckYea with some edits and formatting from Feylos. Thx
				HeckYea and Feylos {'<3'}
			</Text>
		</>
	);
}

export default CombatGuide;
