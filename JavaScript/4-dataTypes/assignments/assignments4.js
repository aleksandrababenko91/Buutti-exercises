/*const tree = { x: 6, y: 7, hitpoints: 30 };
const rock = { x: 3, y : 11, hitpoints: 90 };
const damage = 15;

const hitpoints = tree.hitpoints;

{
    let treeHitpointsLeft;
    let rockHitpointsLeft;

    const hitpoints = rock.hitpoints;
    rockHitpointsLeft = hitpoints - damage;

    console.log("Rock hitpoints left: " + rockHitpointsLeft);

    {
        treeHitpointsLeft = hitpoints - damage;

        console.log("Tree hitpoints left: " + treeHitpointsLeft);
    }
}
*/

const tree = { x: 6, y: 7, hitpoints: 30 };
const rock = { x: 3, y : 11, hitpoints: 90 };
const damage = 15;


{
    let treeHitPointsLeft = tree.hitpoints - damage;
    console.log(treeHitPointsLeft);
}
{
    let rockHitpointsLeft = rock.hitpoints - damage;
    console.log(rockHitpointsLeft);
}