import ScheduleSearch from "./ScheduleSearch";
import * as SC from './ProfileSchedule.module'
import { Container } from "@/app/components/ui/StandartStyles/StandartStyles.style";
import ProfileScheduleGroups from "./groups/ProfileScheduleGroups";

const ProfileShcedule = () => {
  return (
      <Container>
        <SC.Container>
          <ScheduleSearch/>
          <ProfileScheduleGroups/>
        </SC.Container>
      </Container>
  );
};
export default ProfileShcedule;
