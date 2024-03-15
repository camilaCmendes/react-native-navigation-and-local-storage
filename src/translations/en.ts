import { Translations } from "./type";

export const en: Translations = {
  translation: {
    // screens/groups
    groups_title: "Classes",
    groups_subtitle: "Play with your classes",
    groups_emptyListMessage: "How about registering the first class?",
    groups_newClassButton: "Create new class",
    groups_alertMessage_title: "Groups",
    groups_alertMessage_description: "Failed to load groups",

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
    players_alertMessage_addPlayer_title: "New Person",
    players_alertMessage_addPlayer_description:
      "Enter the name of the person to add.",
    players_alertMessage_addPlayer_description_error: "Failed to add.",
    players_alertMessage_playersByTeam_title: "People",
    players_alertMessage_playersByTeam_description:
      "Failed to load people from the selected team.",
    players_alertMessage_playerRemove_title: "Remove Person",
    players_alertMessage_playerRemove_description:
      "Failed to remove this person.",
    players_alertMessage_groupRemove_title: "Remove",
    players_alertMessage_groupRemove_description:
      "Do you want to remove the group?",
    players_alertMessage_groupRemove_no: "No",
    players_alertMessage_groupRemove_yes: "Yes",

    // storage/group
    storage_appError_groupAlreadyExists:
      "A group with this name already exists.",

    // storage/player
    storage_player_playerAddByGroup_AppError:
      "This person is already added to a team here.",
  },
};
