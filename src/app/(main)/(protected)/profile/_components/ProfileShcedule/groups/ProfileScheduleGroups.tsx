import ProfileScheduleGroup from "./ProfileScheduleGroup";
import * as SC from './GroupsStyle.module'


const ProfileScheduleGroups = () => {
    return (
        <SC.GroupsContainer>
            <SC.GroupText>Выберите группу:</SC.GroupText>
            <ProfileScheduleGroup group={'123'} />
        </SC.GroupsContainer>
    )
}
export default ProfileScheduleGroups;