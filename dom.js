var selectedPlayers = [];

document.querySelectorAll( 'button.selectPlayer' ).forEach( function( player )
{
    player.addEventListener( 'click', function( e )
    {
        if ( selectedPlayers.length > 4 )
        {
            alert( 'You have already selected ' + selectedPlayers.length + ' players' ); return;
        }

        const childs = e.target.parentNode.children;

        const playerName = childs[2].innerText;
        
        selectedPlayers.push( { playerId : e.target.id, playerName : playerName } );

        e.target.innerText = 'Selected';

        e.target.disabled = true;

        updatetotalSelectedPlayer();

    }, false );
});

function updatetotalSelectedPlayer()
{
    document.getElementById( 'totalSelectedPlayer' ).innerText = selectedPlayers.length;

    const playerLists = document.getElementById( 'player-list' );

    playerLists.innerHTML = "";

    selectedPlayers.forEach( function( player )
    {
        var li = document.createElement( "li" );
    
        li.appendChild( document.createTextNode( player.playerName ) );
        
        playerLists.appendChild( li );
    } );
}

document.getElementById( 'calculate-btn' ).addEventListener( 'click', function()
{
    if ( ! selectedPlayers.length )
    {
        alert( 'Please select players first' ); return;
    }

    const playerCostVal = document.getElementById( 'player-cost' ).value;

    if ( playerCostVal == '' )
    {
        alert( 'Please input per player cost first' ); return;
    }
    
    const playerCost = parseFloat( playerCostVal );

    document.getElementById( 'player-total-cost' ).innerText = playerCost * selectedPlayers.length;
});


// Total Calculation part
document.getElementById( 'total-calculate-btn' ).addEventListener( 'click', function()
{
    if ( ! selectedPlayers.length )
    {
        alert( 'Please select players first' ); return;
    }

    const playerCostVal = document.getElementById( 'player-total-cost' ).innerText;

    if ( playerCostVal == '' )
    {
        alert( 'Please input per player cost first' ); return;
    }

    const playerCost = parseFloat( playerCostVal );

    const managerCostVal = document.getElementById( 'manager-cost' ).value;

    if ( managerCostVal == '' )
    {
        alert( 'Please input manager cost first' ); return;
    }

    const managerCost = parseFloat( managerCostVal );

    const coachCostVal = document.getElementById( 'coach-cost' ).value;

    if ( coachCostVal == '' )
    {
        alert( 'Please input coach cost first' ); return;
    }

    const coachCost = parseFloat( coachCostVal );

    const PlayerManagerAndCoachCost = playerCost + managerCost + coachCost;

    document.getElementById( 'total-cost' ).innerText = PlayerManagerAndCoachCost;    
});