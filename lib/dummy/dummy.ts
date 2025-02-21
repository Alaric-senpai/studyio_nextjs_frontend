import { Report } from "@/components/tables/columns/reports.columns";
import { Users } from "@/components/tables/columns/users.columns";

export const UsersDummy: Users[] = [
    {
        id: 1,
        email: "admin1@school.com",
        name: "John Admin",
        role: "ADMIN",
        gender: "MALE",
        createdAt: new Date("2020-01-01"),
        updatedAt: new Date("2021-01-01"),
        isActive: true
    },
    {
        id: 2,
        email: "parent1@school.com",
        name: "Jane Parent",
        role: "PARENT",
        gender: "FEMALE",
        createdAt: new Date("2021-02-01"),
        updatedAt: new Date("2021-05-01"),
        isActive: true
    },
    {
        id: 3,
        email: "developer1@school.com",
        name: "Mark Developer",
        role: "DEVELOPER",
        gender: "MALE",
        createdAt: new Date("2020-05-01"),
        updatedAt: new Date("2022-02-01"),
        isActive: true
    },
    {
        id: 4,
        email: "teacher1@school.com",
        name: "Sarah Teacher",
        role: "TEACHER",
        gender: "FEMALE",
        createdAt: new Date("2019-07-01"),
        updatedAt: new Date("2022-06-01"),
        isActive: true
    },
    {
        id: 5,
        email: "student1@school.com",
        name: "Alex Student",
        role: "STUDENT",
        gender: "MALE",
        createdAt: new Date("2022-09-01"),
        updatedAt: new Date("2023-05-01"),
        isActive: true
    },
];

// Add remaining users up to 40
for (let i = 6; i <= 40; i++) {
    UsersDummy.push({
        id: i,
        email: `user${i}@school.com`,
        name: `User ${i}`,
        role: ["ADMIN", "PARENT", "DEVELOPER", "TEACHER", "STUDENT"][i % 5] as Users["role"],
        gender: i % 2 === 0 ? "MALE" : "FEMALE",
        createdAt: new Date(`202${i % 4}-01-01`),
        updatedAt: new Date(`202${(i % 3) + 1}-06-01`),
        isActive: i % 3 !== 0
    });
}


export const ReportsDummy: Report[] = []

for (let i = 0; i < 52; i++) {
    ReportsDummy.push({
        id: i,
        title: `report ${i}`,
        priority: ['LOW', 'MID', 'HIGH'][0] as Report['priority'],
        doctype: 'pdf',
        location: 'local',
        filesize: '20mb',
        createdAt: new Date(),
        updatedAt: new Date()
    })
    
}

export const chartDataPie = [
    {
        gender:'Male', count: 20
    },
    {
        gender:'Female', count:50
    }

]