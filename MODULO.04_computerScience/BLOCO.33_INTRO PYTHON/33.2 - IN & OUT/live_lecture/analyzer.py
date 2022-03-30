from importer import import_games


def get_consoles(video_games):
    consoles = set()
    for game in video_games:
        consoles.add(game["Release"]["Console"])
    return consoles


def sales_by_consoles(video_games):
    result = {console: 0 for console in get_consoles(video_games)}

    for game in video_games:
        game_console = game["Release"]["Console"]
        result[game_console] += game["Metrics"]["Sales"]

    return result


if __name__ == "__main__":
    games = import_games("video_games.json")
    print(sales_by_consoles(games))
