// ***** start - Valid State Map
export const stateMap: Record<string, string> = {
    "default": "default",
    "gujarat": "gj",
    "maharashtra": "mh",
    "madhyapradesh": "mp",
    "rajasthan": "rj",
    "telangana": "tg",
    "tamilnadu": "tn"
    // add more state
};
// ***** end - Valid State Map

export function getStateCode(state: string): string {
    // ***** handle empty string or whitespace
    if (!state || !state.trim()) return stateMap["default"];

    // ***** normalize — lowercase and remove spaces
    const normalizedState = state.toLowerCase().replace(/\s+/g, "");

    // ***** return matched state code or fallback to "default"
    return stateMap[normalizedState] ?? stateMap["default"];
}
// ***** end - Get State Code
