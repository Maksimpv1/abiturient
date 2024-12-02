import ScheduleSearch from "./ScheduleSearch";
import * as SC from './ProfileSchedule.module'
import { Container } from "@/app/components/ui/StandartStyles/StandartStyles.style";
import ProfileScheduleGroups from "./groups/ProfileScheduleGroups";
import Schedule from "./schedule/Schedule";
import { useEffect, useState } from "react";
import { useAppSelector } from "@/app/lib/storeHooks";

const ProfileShcedule = () => {
  const [view,setView] = useState<boolean>(false);

  const group = useAppSelector((item) => item.profile.selectedGroup)

  useEffect(()=>{
    group !== '' ? setView(true) : setView(false) 
  },[group])

  return (
      <Container>
        <SC.Container>
          <ScheduleSearch/>
          <ProfileScheduleGroups/>
          <Schedule view={view} group={group}/>
        </SC.Container>
      </Container>
  );
};
export default ProfileShcedule;
