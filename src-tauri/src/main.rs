// Prevents additional console window on Windows in release, DO NOT REMOVE!!
extern crate rand;
use rand::Rng;
use std::io;

#[cfg_attr(not(debug_assertions), windows_subsystem = "windows")]
// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

#[tauri::command]
fn create_pop_matrix(height: i32, width: i32) -> Vec<Vec<i32>> {
    let POP_LENGTH: usize = height as usize;
    let GENE_LENGTH: usize = width as usize;
    let mut pop: Vec<Vec<i32>> = vec![vec![0; GENE_LENGTH]; POP_LENGTH];
    // Populate the pop with vectors of random elements
    pop[0][0] = 1;
    pop[0][1] = 1;
    pop[0][2] = 1;
    pop[0][3] = 1;
    pop[0][4] = 1;
    pop[0][5] = 1;
    pop[0][6] = 1;
    pop[0][7] = 1;
    for i in 1..POP_LENGTH {
        for j in 0..pop[i].len() {
            pop[i][j] = rand::thread_rng().gen_range(0..2);
        }
    }

    for i in 0..POP_LENGTH {
        for j in 0..pop[i].len() {
            print!("{} ", pop[i][j]);
        }
        println!("\n")
    }

    pop
}

#[tauri::command]
fn calculate_values(pop: Vec<Vec<i32>>, start: i32, end: i32) -> Vec<f32> {
    println!("\n");

    let POP_LENGTH = pop.len();
    for i in 0..POP_LENGTH {
        for j in 0..pop[i].len() {
            print!("{} ", pop[i][j]);
        }
        println!("\n")
    }
    let k = end - start;
    let mut values: Vec<f32> = vec![0_f32; 4];
    for i in 0..POP_LENGTH {
        for j in 0..pop[i].len() {
            values[i] = values[i] + (pop[i][j] * 2_i32.pow(7 - j as u32)) as f32;
        }
        values[i] = ((values[i] * k as f32) / (i32::pow(2, 8 as u32) - 1) as f32 + start as f32)
            .powf(2 as f32);
        println!("{}", values[i]);
    }
    values
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![
            greet,
            create_pop_matrix,
            calculate_values
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
