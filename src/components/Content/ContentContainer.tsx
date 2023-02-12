import React from 'react'
import { updateTextarea, addPost } from '../../reducers/profileReducer'
import { connect } from 'react-redux'
import { PostDataType } from '../../reducers/profileReducer'
import { ReduxRootStateType } from '../../store'
import Content from './Content'

class ContentContainer extends React.Component<ContentContainerType> {
	render() {
		return (
			<Content
				postsData={this.props.postData}
				newPostText={this.props.newPostText}
				updateTextarea={this.props.updateTextarea}
				addPost={this.props.addPost}
			/>
		)
	}
}

const mapStateToProps = (
	state: ReduxRootStateType
): ContentMapStateToPropsType => {
	return {
		postData: state.profile.postData,
		newPostText: state.profile.newPostText
	}
}
type ContentMapStateToPropsType = {
	postData: PostDataType[]
	newPostText: string
}
type ContentMapDispatchToPropsType = {
	updateTextarea: (text: string) => void
	addPost: (message: string) => void
}

type ContentContainerType = ContentMapStateToPropsType &
	ContentMapDispatchToPropsType

export default connect(mapStateToProps, { updateTextarea, addPost })(
	ContentContainer
)
