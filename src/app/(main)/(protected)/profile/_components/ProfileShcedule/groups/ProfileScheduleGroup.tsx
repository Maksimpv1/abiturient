import Cross from '@/app/components/ui/icons/Cross';
import * as SC from './GroupsStyle.module'

interface IProfileScheduleGroup {
    group: string,
}

export const ProfileScheduleGroup = (props:IProfileScheduleGroup) => {
    return(
        <SC.GroupContainer >
            <SC.Text>{props.group}</SC.Text>
            {/*<SC.SvgContainer>{props.type && <Cross />}</SC.SvgContainer>*/}
        </SC.GroupContainer>
    )
}
export default ProfileScheduleGroup;