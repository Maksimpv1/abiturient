"use client";

import Link from "next/link";
import * as SC from "./ProfileTeachers.module";
import TeacherFront from "./TeacherFront";
import { useState } from "react";
import { teacherData } from "./TeacherData";
import Search from "@/app/components/ui/Search/Search";

const Teachers = () => {

  return (
    <SC.TeachersContainer>
      <Search dataTeach={teacherData} />
      {teacherData.map((item, index) => (
        <Link key={index} href={`/profile/${item.id}`}>
          <TeacherFront {...item} />
        </Link>
      ))}
    </SC.TeachersContainer>
  );
};
export default Teachers;
