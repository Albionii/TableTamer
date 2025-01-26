using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace TableTamer.Migrations
{
    /// <inheritdoc />
    public partial class FixedFatura : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "UserId",
                table: "Fatura");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "UserId",
                table: "Fatura",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }
    }
}
