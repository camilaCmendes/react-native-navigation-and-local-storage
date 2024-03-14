import { Translations } from "./type";

export const en: Translations = {
  translation: {
    // screens/groups
    groups_title: "Classes",
    groups_subtitle: "Play with your classes",
    groups_emptyListMessage: "How about registering the first class?",
    groups_newClassButton: "Create new class",

    // screens/newGroup
    newGroup_title: "New Group",
    newGroup_subtitle: "Create the group to add people",
    newGroup_inputPlaceholder: "Group name",
    newGroup_buttonLabel: "Create",
    newGroup_alert_title_newGroup: "New Group",
    newGroup_alert_description_emptyInput: "Enter the class name",
    newGroup_alert_description_errorCreateNewGroup:
      "Unable to create a new group",

    // screens/players
    players_subtitle: "add people and split the teams",
    players_inputPlaceholder: "Person's name",
    players_emptyListMessage: "No people in this team.",
    players_removeTeamButton: "Remove Class",
    players_teamA: "team a",
    players_teamB: "team b",

    // storage/group
    storage_appError_groupAlreadyExists:
      "A group with this name already exists",
  },
};
