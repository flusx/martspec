import React from "react"
import IconTitleTextElem, {
	IconTitleText,
} from "../molecule/icon-title-text-elem"

// type IconTitleTextListProps = {
// 	iconList: Array<string>
// 	titleList: Array<string>
// 	subtitleList: Array<string>
// }

interface IIconTitleTextListProps {
	items: Array<IconTitleText>
}

const IconTitleTextList = ({ items }: IIconTitleTextListProps): JSX.Element => {
	return (
		<ul className="list-with-icons">
			{items.map((item, index) => (
				<IconTitleTextElem
					key={index}
					{...item}
				/>
			))}
		</ul>
	)
}

export default IconTitleTextList
