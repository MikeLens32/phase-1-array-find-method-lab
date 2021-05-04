function superbowlWin(record) {
    let season = record.find(function(item){
        return item.result === 'W'
    })
    return  season ? season.year : season
}
