export interface UserOption {
    label: string;
    value: string;
}

export interface WorkflowRule {
    id: number;
    vendor: string;
    applications: string;
    type: string;
    discipline: string;
    reviewer1: string;
    reviewer2: string;
    approver: string;
}

export const users: UserOption[] = [
    { label: 'Alice', value: 'alice' },
    { label: 'Bob', value: 'bob' },
    { label: 'Charlie', value: 'charlie' },
    { label: 'David', value: 'david' },
    { label: 'Eve', value: 'eve' },
    { label: 'Frank', value: 'frank' },
    { label: 'Grace', value: 'grace' },
    { label: 'Heidi', value: 'heidi' },
    { label: 'Ivan', value: 'ivan' },
    { label: 'Judy', value: 'judy' },
    { label: 'Mallory', value: 'mallory' },
    { label: 'Henry', value: 'henry' }
];

export const workflowRules: WorkflowRule[] = [
    {
        id: 1,
        vendor: 'Autodesk',
        applications: 'Revit',
        type: 'Addins',
        discipline: 'Structure',
        reviewer1: 'alice',
        reviewer2: 'bob',
        approver: 'charlie',
    },
    {
        id: 2,
        vendor: 'Autodesk',
        applications: 'AutoCAD',
        type: 'Addins',
        discipline: 'Architecture',
        reviewer1: 'david',
        reviewer2: 'eve',
        approver: 'frank',
    },
    {
        id: 3,
        vendor: 'Autodesk',
        applications: 'Inventor',
        type: 'Addins',
        discipline: 'Structure',
        reviewer1: 'grace',
        reviewer2: 'bob',
        approver: 'alice',
    },
    {
        id: 4,
        vendor: 'Autodesk',
        applications: 'Navisworks',
        type: 'Dynamo',
        discipline: 'MEP',
        reviewer1: 'henry',
        reviewer2: 'david',
        approver: 'eve',
    },
    {
        id: 5,
        vendor: 'Trimble',
        applications: 'Tekla Structures',
        type: 'Extensions',
        discipline: 'Structure',
        reviewer1: 'bob',
        reviewer2: 'frank',
        approver: 'charlie',
    },
    {
        id: 6,
        vendor: 'Trimble',
        applications: 'Tekla Structures Designer',
        type: 'Extensions',
        discipline: 'Structure',
        reviewer1: 'alice',
        reviewer2: 'grace',
        approver: 'henry',
    },
    {
        id: 7,
        vendor: 'Trimble',
        applications: 'SketchUp',
        type: 'Addins',
        discipline: 'Architecture',
        reviewer1: 'david',
        reviewer2: 'charlie',
        approver: 'bob',
    },
    {
        id: 8,
        vendor: 'Bentley Systems',
        applications: 'MicroStation',
        type: 'Extensions',
        discipline: 'Architecture',
        reviewer1: 'alice',
        reviewer2: 'frank',
        approver: 'grace',
    },
    {
        id: 9,
        vendor: 'Bentley Systems',
        applications: 'OpenBuildings',
        type: 'Macros',
        discipline: 'MEP',
        reviewer1: 'henry',
        reviewer2: 'eve',
        approver: 'alice',
    },
    {
        id: 10,
        vendor: 'Bentley Systems',
        applications: 'OpenRoads',
        type: 'Macros',
        discipline: 'MEP',
        reviewer1: 'charlie',
        reviewer2: 'grace',
        approver: 'frank',
    },
    {
        id: 11,
        vendor: 'ESRI',
        applications: 'ArcGIS',
        type: 'Macros',
        discipline: 'Structure',
        reviewer1: 'bob',
        reviewer2: 'david',
        approver: 'eve',
    },
    {
        id: 12,
        vendor: 'McNeel & Associates',
        applications: 'Rhino',
        type: 'Dynamo',
        discipline: 'MEP',
        reviewer1: 'grace',
        reviewer2: 'henry',
        approver: 'alice',
    },
];
