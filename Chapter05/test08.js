let groups = [
    ["Martin", "Daniel", "Keith"],
    ["Margot", "Marina", "Ali"],
    ["Helen", "Jonah", "Sambikos"]
];

outer:
for (let group of groups) {
    inner:
    for (let member of group) {
        if (member.startsWith("M")){
            console.log("Found one starting with M: " + member);
            break outer;
        }
    }
}