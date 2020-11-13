class MovimentRemove {
  constructor(financeRepository) {
    this.financeRepository = financeRepository;
  }

  async execute(user_id, idmoviment) {
    const moviment = await this.financeRepository.movimentRemove(idmoviment);
    return moviment;
  }
}
module.exports = MovimentRemove;
