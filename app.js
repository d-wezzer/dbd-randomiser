"use strict";
var _a, _b;
var SurvivorPerkCategory;
(function (SurvivorPerkCategory) {
    SurvivorPerkCategory["Exhaustion"] = "Exhaustion";
    SurvivorPerkCategory["Healing"] = "Healing";
    SurvivorPerkCategory["Objective"] = "Objective";
    SurvivorPerkCategory["Altruism"] = "Altruism";
    SurvivorPerkCategory["Stealth"] = "Stealth";
})(SurvivorPerkCategory || (SurvivorPerkCategory = {}));
var KillerPerkCategory;
(function (KillerPerkCategory) {
    KillerPerkCategory["Chase"] = "Chase";
    KillerPerkCategory["Surveillance"] = "Surveillance";
    KillerPerkCategory["Tracking"] = "Tracking";
    KillerPerkCategory["Lethality"] = "Lethality";
})(KillerPerkCategory || (KillerPerkCategory = {}));
var survivorPerks = (_a = {},
    _a[SurvivorPerkCategory.Exhaustion] = [
        {
            name: "Sprint Burst",
            description: "You can run fast for a short duration after sprinting.",
            effect: "Activate to gain a burst of speed for 3 seconds. Causes exhaustion for 60/50/40 seconds."
        },
        {
            name: "Dead Hard",
            description: "When injured, tap into your adrenaline bank and dash forward quickly to avoid damage.",
            effect: "Activate to dash forward quickly for a short duration. Causes exhaustion for 60/50/40 seconds."
        },
        {
            name: "Lithe",
            description: "After a fast vault, break into a sprint at 150% of your normal running speed for a short duration.",
            effect: "Activate after a fast vault to sprint at 150% speed for 3 seconds. Causes exhaustion for 60/50/40 seconds."
        },
        {
            name: "Balanced Landing",
            description: "Stumbling upon obstacles makes you move faster. Reduces stagger duration from falls.",
            effect: "Upon landing, you stagger less and move at an increased speed for 3 seconds. Causes exhaustion for 60/50/40 seconds."
        },
        {
            name: "Head On",
            description: "While standing within a locker for 3 seconds, Head On activates. Perform a rushed action to leave the locker and stun the killer.",
            effect: "Activate within a locker to stun the killer when leaving the locker. Causes exhaustion for 60/50/40 seconds."
        },
    ],
    _a[SurvivorPerkCategory.Healing] = [
        {
            name: "Self-Care",
            description: "You can heal yourself without a medkit.",
            effect: "Unlocks the ability to heal yourself without a medkit at 50% the normal healing speed."
        },
        {
            name: "Botany Knowledge",
            description: "You transform plants found around the campfire into tinctures that slow your bleeding.",
            effect: "Increases the speed of healing and searching by 10/15/20%. Moderately increases the efficiency of Med-Kits."
        },
        {
            name: "We'll Make It",
            description: "When healing a survivor, you provide a boost of speed to both you and the healed survivor.",
            effect: "After unhooking or healing a survivor, gain 100% additional speed for 30/60/90 seconds. The healed survivor gains a 50% speed boost for the same duration."
        },
        {
            name: "Empathy",
            description: "Unlocks potential in one's aura reading ability. You can see the auras of injured survivors.",
            effect: "See the auras of injured survivors. The range of your aura-reading abilities is increased by 32 meters."
        },
    ],
    _a[SurvivorPerkCategory.Objective] = [
        {
            name: "Repair",
            description: "You are efficient at repairing generators.",
            effect: "Repair generators 15/20/25% faster."
        },
        {
            name: "Toolbox Efficiency",
            description: "Your proficiency with tools allows you to repair and sabotage faster.",
            effect: "Repair, sabotage, and untrap actions are 15/20/25% faster. Toolbox consumption rate is increased by 15/20/25%."
        },
        {
            name: "Saboteur",
            description: "You know how to dismantle hooks without making a sound.",
            effect: "Unlocks the ability to sabotage hooks. Sabotaged hooks take 30/60/90 seconds to respawn."
        },
        {
            name: "We're Gonna Live Forever",
            description: "The promise of an extra 25% Bloodpoints on cooperative actions fills you with hope.",
            effect: "Gain 25% more Bloodpoints for actions in the Altruism category."
        },
    ],
    _a[SurvivorPerkCategory.Altruism] = [
        {
            name: "We'll Make It",
            description: "When healing a survivor, you provide a boost of speed to both you and the healed survivor.",
            effect: "After unhooking or healing a survivor, gain 100% additional speed for 30/60/90 seconds. The healed survivor gains a 50% speed boost for the same duration."
        },
        {
            name: "Borrowed Time",
            description: "Unlocks potential in one's aura reading ability. If you are unhooked or unhook yourself, the killer sees your aura for 4/5/6 seconds.",
            effect: "If you unhook a survivor or unhook yourself, the killer sees your aura for 4/5/6 seconds. Taking a protection hit grants the unhooked survivor the Endurance status effect for 15 seconds."
        },
        {
            name: "Empathy",
            description: "Unlocks potential in one's aura reading ability. You can see the auras of injured survivors.",
            effect: "See the auras of injured survivors. The range of your aura-reading abilities is increased by 32 meters."
        },
        {
            name: "Kindred",
            description: "You're not affected by the killer's aura-reading abilities, but you see the auras of all other survivors when they are within 8 meters of the killer.",
            effect: "When within the killer's terror radius, see the auras of other survivors within 8 meters of the killer. The killer sees your aura. Increases the odds of being the killer's Obsession."
        }
    ],
    _a[SurvivorPerkCategory.Stealth] = [
        {
            name: "Urban Evasion",
            description: "Your movement speed while crouching is increased by 90/95/100%.",
            effect: "Move 90/95/100% faster while crouching."
        },
        {
            name: "Iron Will",
            description: "You're able to concentrate and enter a meditative-like state to numb some pain.",
            effect: "Grants the ability to muffle grunts and groans caused by pain by 50/75/100%."
        },
        {
            name: "Quick & Quiet",
            description: "You do not make as much noise as others when quickly vaulting or entering lockers.",
            effect: "Vaulting quickly and entering lockers does not produce noise notifications for the killer."
        },
        {
            name: "Dance With Me",
            description: "When performing a fast vault or leaving a locker in a sprint, you leave no scratch marks for a short duration.",
            effect: "No scratch marks are left for the killer to see after performing a fast vault or leaving a locker in a sprint."
        }
    ],
    _a);
var killerPerks = (_b = {},
    _b[KillerPerkCategory.Chase] = [
        {
            name: "Enduring",
            description: "You recover from stuns faster.",
            effect: "Enduring reduces the duration of pallet stuns by 50%."
        },
        {
            name: "Brutal Strength",
            description: "You are fueled by your need for brutality. After breaking a pallet, the speed of your vaults is increased by 10% for 3 seconds.",
            effect: "Break pallets 10/15/20% faster. The speed bonus applies to vaulting over pallets and windows."
        },
        {
            name: "Spirit Fury",
            description: "After breaking 4 pallets, the next time you are stunned by a pallet, The Entity will instantly break it.",
            effect: "After breaking 4/3/2 pallets, the next time you are stunned by a pallet, The Entity will instantly break it."
        },
        {
            name: "Bamboozle",
            description: "Your vault speed is 5/10/15% faster. Performing a vault action calls upon The Entity to block that vault location for 16/24/32 seconds.",
            effect: "Vault 5/10/15% faster. Performing a vault action blocks the vault location for 16/24/32 seconds."
        },
    ],
    _b[KillerPerkCategory.Surveillance] = [
        {
            name: "Surveillance",
            description: "Any regressing generator will be highlighted by a white aura.",
            effect: "Any regressing generator will be highlighted by a white aura for 8/12/16 seconds. If the generator regresses, its aura is revealed to you."
        },
        {
            name: "A Nurse's Calling",
            description: "You can sense the auras of survivors healing or being healed within a 20/24/28 meter range.",
            effect: "See the auras of survivors healing or being healed within 20/24/28 meters."
        },
        {
            name: "Discordance",
            description: "Any time 2/3/4 survivors are working on the same generator, its aura is highlighted for 8 seconds.",
            effect: "Any time 2/3/4 survivors are working on the same generator, its aura is highlighted for 8 seconds. Discordance triggers a loud noise notification."
        },
        {
            name: "Tinkerer",
            description: "The sound of a completed generator explodes in your ears. The auras of survivors located within the explosion are revealed for 6/8/10 seconds.",
            effect: "When a generator is repaired to 70%, receive a loud noise notification and its aura is highlighted. The auras of survivors within the generator's explosion range are revealed for 6/8/10 seconds."
        },
    ],
    _b[KillerPerkCategory.Tracking] = [
        {
            name: "Whispers",
            description: "The Entity reveals the survivor's auras within a range of 48/40/32 meters.",
            effect: "The Entity reveals the survivor's auras within 48/40/32 meters. When a survivor enters or leaves the range, the perk activates."
        },
        {
            name: "Stridor",
            description: "Survivor's pain cries are 25/50/50% louder, and their breathing is 0/25/50% louder.",
            effect: "Survivor's pain cries are 25/50/50% louder. Survivor's breathing is 0/25/50% louder."
        },
        {
            name: "Bloodhound",
            description: "Blood marks left by injured survivors are considerably more discernible than normal.",
            effect: "Blood marks left by injured survivors are considerably more discernible than normal. They are visible 2/3/4 seconds longer than normal."
        },
        {
            name: "Predator",
            description: "Scratch marks left by survivors are slightly/moderately/considerably more discernible for 2 seconds.",
            effect: "Scratch marks left by survivors are slightly/moderately/considerably more discernible for 2 seconds."
        },
    ],
    _b[KillerPerkCategory.Lethality] = [
        {
            name: "NOED (No One Escapes Death)",
            description: "The auras of survivors within your range are revealed. After the exit gates are powered, gain a 3/4/5% Haste status effect for 120 seconds.",
            effect: "The auras of survivors within your range are revealed. After the exit gates are powered, gain a 3/4/5% Haste status effect for 120 seconds. NOED affects all survivors."
        },
        {
            name: "Hex: Ruin",
            description: "Any survivors affected by Ruin suffer from the Incapacitated status effect, which disables the ability to repair generators for the duration of the Hex.",
            effect: "Any survivors affected by Ruin suffer from the Incapacitated status effect, which disables the ability to repair generators for the duration of the Hex. The hex effects persist as long as the related hex totem is standing."
        },
        {
            name: "Make Your Choice",
            description: "When a survivor rescues another from a hook at least 32 meters away, Make Your Choice triggers. The rescuer suffers from the Oblivious status effect for 40/50/60 seconds.",
            effect: "When a survivor rescues another from a hook at least 32 meters away, Make Your Choice triggers. The rescuer suffers from the Oblivious status effect for 40/50/60 seconds."
        },
        {
            name: "Devour Hope",
            description: "Any survivor who cleanses a totem is inflicted with the Exposed status effect for 40/50/60 seconds.",
            effect: "Any survivor who cleanses a totem is inflicted with the Exposed status effect for 40/50/60 seconds. Devour Hope affects all survivors."
        },
    ],
    _b);
function isSurvivorPerkCategory(category) {
    return Object.values(SurvivorPerkCategory).includes(category);
}
function getRandomPerk(category) {
    if (isSurvivorPerkCategory(category)) {
        var perks = survivorPerks[category];
        var randomIndex = Math.floor(Math.random() * perks.length);
        return perks[randomIndex];
    }
    else {
        var perks = killerPerks[category];
        var randomIndex = Math.floor(Math.random() * perks.length);
        return perks[randomIndex];
    }
}
function generateRandomPerks(numSurvivors, includeKiller) {
    var randomPerks = {};
    for (var i = 1; i <= numSurvivors; i++) {
        var survivorPerks_1 = [];
        var selectedCategories = [];
        // Generate four perks for each survivor
        while (survivorPerks_1.length < 4) {
            var randomCategory = Object.values(SurvivorPerkCategory)[Math.floor(Math.random() * Object.values(SurvivorPerkCategory).length)];
            // Ensure that a category is not selected more than once
            if (!selectedCategories.includes(randomCategory)) {
                selectedCategories.push(randomCategory);
                var perk = getRandomPerk(randomCategory);
                survivorPerks_1.push(perk);
            }
        }
        randomPerks["Survivor ".concat(i)] = survivorPerks_1;
    }
    if (includeKiller) {
        var killerPerks_1 = [];
        var selectedCategories = [];
        // Generate four perks for the killer
        while (killerPerks_1.length < 4) {
            var randomCategory = Object.values(KillerPerkCategory)[Math.floor(Math.random() * Object.values(KillerPerkCategory).length)];
            // Ensure that a category is not selected more than once
            if (!selectedCategories.includes(randomCategory)) {
                selectedCategories.push(randomCategory);
                var perk = getRandomPerk(randomCategory);
                killerPerks_1.push(perk);
            }
        }
        randomPerks["Killer"] = killerPerks_1;
    }
    return randomPerks;
}
function resetDefaultPerksOutput() {
    var perksOutput = document.getElementById('perksOutput');
    if (perksOutput) {
        perksOutput.innerHTML = "\n        <!-- Survivor 1 -->\n        <div class=\"player-pane survivor\" id=\"survivor1\">\n          <strong>Survivor 1:</strong>\n          <div class=\"perk-names perk-column\">\n            <!-- Perk names go here -->\n          </div>\n          <div class=\"perk-descriptions perk-column\">\n            <!-- Perk descriptions go here -->\n          </div>\n        </div>\n  \n        <!-- Survivor 2 -->\n        <div class=\"player-pane survivor\" id=\"survivor2\">\n          <strong>Survivor 2:</strong>\n          <div class=\"perk-names perk-column\">\n            <!-- Perk names go here -->\n          </div>\n          <div class=\"perk-descriptions perk-column\">\n            <!-- Perk descriptions go here -->\n          </div>\n        </div>\n  \n        <!-- Survivor 3 -->\n        <div class=\"player-pane survivor\" id=\"survivor3\">\n          <strong>Survivor 3:</strong>\n          <div class=\"perk-names perk-column\">\n            <!-- Perk names go here -->\n          </div>\n          <div class=\"perk-descriptions perk-column\">\n            <!-- Perk descriptions go here -->\n          </div>\n        </div>\n  \n        <!-- Survivor 4 -->\n        <div class=\"player-pane survivor\" id=\"survivor4\">\n          <strong>Survivor 4:</strong>\n          <div class=\"perk-names perk-column\">\n            <!-- Perk names go here -->\n          </div>\n          <div class=\"perk-descriptions perk-column\">\n            <!-- Perk descriptions go here -->\n          </div>\n        </div>\n  \n        <!-- Killer -->\n        <div class=\"player-pane killer\" id=\"killer\">\n          <strong>Killer:</strong>\n          <div class=\"perk-names perk-column\">\n            <!-- Perk names go here -->\n          </div>\n          <div class=\"perk-descriptions perk-column\">\n            <!-- Perk descriptions go here -->\n          </div>\n        </div>\n        ";
    }
    else {
        console.error('Could not find perksOutput element');
    }
}
function generatePerks() {
    resetDefaultPerksOutput();
    var numSurvivorsInput = document.getElementById('numSurvivors');
    var includeKillerInput = document.getElementById('includeKiller');
    var perksOutput = document.getElementById('perksOutput');
    var waitForUserInput = document.getElementById('waitForUserInput');
    var tooManySurvivors = document.getElementById('tooManySurvivors');
    if (numSurvivorsInput && includeKillerInput && perksOutput && waitForUserInput && tooManySurvivors) {
        var numSurvivors = parseInt(numSurvivorsInput.value, 10);
        var includeKiller = includeKillerInput.checked;
        if ((numSurvivors === 0 && !includeKiller)) {
            // If there are 0 survivors and no killer, or more than 4 survivors, hide #perksOutput
            perksOutput.style.display = 'none';
            waitForUserInput.style.display = 'flex';
            tooManySurvivors.style.display = 'none';
        }
        else if (numSurvivors > 4) {
            perksOutput.style.display = 'none';
            waitForUserInput.style.display = 'none';
            tooManySurvivors.style.display = 'flex';
        }
        else {
            var randomPerks = generateRandomPerks(numSurvivors, includeKiller);
            displayPerks(randomPerks, perksOutput);
            perksOutput.style.display = 'flex'; // Show #perksOutput
            waitForUserInput.style.display = 'none';
            tooManySurvivors.style.display = 'none';
        }
    }
    else {
        console.error('Could not find input or output elements');
    }
}
function displayPerks(perks, perksOutput) {
    if (!perksOutput) {
        return;
    }
    for (var _i = 0, _a = Object.entries(perks); _i < _a.length; _i++) {
        var _b = _a[_i], player = _b[0], playerPerks = _b[1];
        var playerPane = document.getElementById(player.replace(' ', '').toLowerCase()); // Remove spaces from player name for id
        if (playerPane) {
            var playerDiv = document.createElement('div');
            playerDiv.className = 'player-info'; // Add a class for styling
            // Add a line to separate the header from the rest
            var separatorLine = document.createElement('hr');
            separatorLine.className = 'header-separator'; // Add a class for styling
            playerDiv.appendChild(separatorLine);
            // Create a table for better formatting
            var perkTable = document.createElement('table');
            perkTable.className = 'perk-table';
            for (var _c = 0, playerPerks_1 = playerPerks; _c < playerPerks_1.length; _c++) {
                var perk = playerPerks_1[_c];
                // Create a row for each perk
                var perkRow = document.createElement('tr');
                // Left column for perk names
                var perkNameCell = document.createElement('td');
                var boldPerkName = document.createElement('strong');
                boldPerkName.textContent = perk.name;
                perkNameCell.appendChild(boldPerkName);
                perkRow.appendChild(perkNameCell);
                // Right column for perk descriptions
                var perkDescriptionCell = document.createElement('td');
                perkDescriptionCell.innerHTML = perk.effect;
                perkRow.appendChild(perkDescriptionCell);
                // Append the row to the table
                perkTable.appendChild(perkRow);
            }
            // Append the table to the playerDiv
            playerDiv.appendChild(perkTable);
            playerPane.appendChild(playerDiv);
        }
    }
}
