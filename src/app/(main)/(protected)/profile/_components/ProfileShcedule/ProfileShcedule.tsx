import ScheduleSearch from "./ScheduleSearch";
import * as SC from './ProfileSchedule.module'
import { Container } from "@/app/components/ui/StandartStyles/StandartStyles.style";
import ProfileScheduleGroups from "./groups/ProfileScheduleGroups";
import Schedule from "./schedule/Schedule";

const ProfileShcedule = () => {



  return (
      <Container>
        <SC.Container>
          <ScheduleSearch/>
          <ProfileScheduleGroups/>
          <Schedule/>
        </SC.Container>
      </Container>
  );
};
export default ProfileShcedule;
