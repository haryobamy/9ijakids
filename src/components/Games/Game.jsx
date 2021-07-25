import React from "react";
import {
    Filter,
    FilterIcon,
    FilterItem,
    FilterMenu,
    GameButton,
    GameCard,
    GameContainer,
    GameDesc,
    GameHeading,
    GameImg,
    GameInfo,
    GameSearch,
    GameTitle,
    GameWrapper,
    GroupIcon,
    LevelIcon,
    SearchIcon,
} from "./GameElements";

const filterByGroup = [
    {
        id: 1,
        name: "Academic",
        button: "Academic",
    },
    {
        id: 2,
        name: "Financial Literacy",
        button: "Financial",
    },
];
const filterByLevel = [
    {
        id: 1,
        name: "Key Stage 1",
        button: "Key Stage 1",
    },
    {
        id: 2,
        name: "Financial Literacy",
        button: "Financial ",
    },
    {
        id: 3,
        name: "Key Stage 2",
        button: "Key Stage 2",
    },
];

const Game = ({ heading, data }) => {
    const [allGames, setAllGames] = React.useState(data)
    const [isOpen, setIsOPen] = React.useState(false);

    const [search, setSearch] = React.useState("");


    const searching = (e) => {

        handleChange(e)
        let searchedGames = data.filter((game) =>
            game.Topic.toLowerCase().includes(search.toLocaleLowerCase())

        )
        setAllGames(searchedGames)


    };

    const filteringByLevel = (button) => {
        const FilteredData = data.filter((game) => game.Level === button)
        setAllGames(FilteredData)
    }
    const filteringByGroup = (button) => {
        const FilteredData = data.filter((game) => game.Group === button)
        setAllGames(FilteredData)
    }


    const handleChange = (e) => {
        e.preventDefault();

        setSearch(e.target.value.toLowerCase());

    };

    const toggle = () => {
        setIsOPen(!isOpen);
    };



    return (
        <GameContainer>
            <GameHeading>{heading}</GameHeading>
            <GameSearch>
                <input
                    type="text"
                    onChange={searching}
                    placeholder="Search Games by Topics"

                />
                <SearchIcon />
                <FilterIcon onClick={toggle} />
            </GameSearch>

            <Filter isOpen={isOpen} onClick={toggle}  >
                <FilterMenu>
                    <p>Filter By Levels</p>
                    <LevelIcon />

                    {filterByLevel.map((item, index) => (
                        <FilterItem onClick={() => filteringByLevel(item.name)} key={index}>

                            {item.button}
                        </FilterItem>
                    ))}


                </FilterMenu>
                <FilterMenu>
                    <p>Filter By Group</p>
                    <GroupIcon />
                    {filterByGroup.map((item, index) => (
                        <FilterItem key={index} onClick={() => filteringByGroup(item.name)}>

                            {item.button}
                        </FilterItem>
                    ))}
                </FilterMenu>
            </Filter>


            {!allGames.length > 0 ? (
                <GameWrapper>
                    <div>
                        <h1>Additional {search} games coming soon</h1>
                    </div>
                </GameWrapper>
            ) : (
                <GameWrapper>
                    {allGames.map((item, index) => {
                        return (
                            <GameCard key={index}>
                                <GameImg src={item.GameImage} alt={item.alt} />
                                <GameInfo>
                                    <GameTitle>{item.GameTitle}</GameTitle>
                                    <GameDesc>{item.GameDescription} </GameDesc>

                                    <GameButton> Play Now </GameButton>
                                </GameInfo>
                            </GameCard>
                        );
                    })}
                </GameWrapper>
            )}
        </GameContainer>
    );
};

export default Game;
