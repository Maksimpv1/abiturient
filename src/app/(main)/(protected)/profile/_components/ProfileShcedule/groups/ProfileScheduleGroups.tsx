import ProfileScheduleGroup from "./ProfileScheduleGroup";
import * as SC from './GroupsStyle.module'

const ProfileScheduleGroups = () => {
    return (
        <SC.GroupsContainer>
            <ProfileScheduleGroup/>
            <ProfileScheduleGroup/>
            <ProfileScheduleGroup/>
            <ProfileScheduleGroup/>
        </SC.GroupsContainer>
    )
}
export default ProfileScheduleGroups;