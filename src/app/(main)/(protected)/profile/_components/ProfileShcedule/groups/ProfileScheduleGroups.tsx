import ProfileScheduleGroup from "./ProfileScheduleGroup";
import * as SC from './GroupsStyle.module'
import { useAppSelector } from "@/app/lib/storeHooks";


const ProfileScheduleGroups = () => {
    const groups = useAppSelector((item)=> item.profile.groups )
    return (
        <SC.GroupsContainer>
            <SC.GroupText>Выберите группу:</SC.GroupText>
            <SC.ProfileScheduleGroupContainer>
                {groups.map((item,index) => (
                        <ProfileScheduleGroup key={index} group={item} />
                ))}
            </SC.ProfileScheduleGroupContainer>
        </SC.GroupsContainer>
    )
}
export default ProfileScheduleGroups;